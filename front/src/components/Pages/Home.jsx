import {useState} from 'react';
import { getAccounts } from '../../lib/accounts';
import AccountList from '../Accounts/AccountList';
import CreateAccount from '../Accounts/CreateAccount';
import EditAccount from '../Accounts/EditAccount';

export default function Home({currentUser}) {
    const [accounts, setAccounts] = useState(getAccounts());
    const [showAccounts, setShowAccounts] = useState(false);
    const [isFormShow, setIsFormShow] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedAccount, setEditedAccount] = useState()

    function addAccountHandler(accountData){
        const newAccountData = {
            ...accountData,
            id: Math.random().toString()
        }
        setAccounts(prevAccounts=>[...prevAccounts, newAccountData])
        setIsFormShow(false)
    }

    function closeHandler(){
        setIsFormShow(false);
    }

    function editAccount(id){
        setIsEditing(true)
        accounts.forEach(account => {
            if(account.id === id){
                setEditedAccount(account)
            }
        });
    }

    function editAccountHandler(id, editedAccountData){
        setAccounts(prevAccounts => prevAccounts.map(account=>{
            if(account.id === id){
                return {
                    ...account,
                    name: editedAccountData.name,
                    amount: editedAccountData.amount,
                    description: editedAccountData.description,
                    type: editedAccountData.type,
                    currency: editedAccountData.currency
                }
            } else {
                return account
            }
        }))
        setIsEditing(false)
    }
    
    function deleteAccountHandler(id){
        setAccounts(prevAccounts=>prevAccounts.filter(account=>account.id !== id));
    }

    return (
    <>
        <h1>Finance App</h1>
        <div style={{marginBottom: "10px"}}>  Hello, {currentUser.name} <a href="#.com">logout</a></div>
        <div>
            <button onClick={()=>setShowAccounts(!showAccounts)}>{showAccounts ? "Hide": "Show"} accounts</button>
            {showAccounts && <AccountList accounts={accounts} onEditing={editAccount} onDelete={deleteAccountHandler}/>}
        </div>
        <div>
            {isFormShow ? '': <button onClick={()=>setIsFormShow(true)}>Add Account</button>}
            {isFormShow && <CreateAccount onAddAccount={addAccountHandler} onCloseForm={closeHandler}/>}
            {isEditing && <EditAccount account= {editedAccount} onEditAccount={editAccountHandler} onCancel={()=>setIsEditing(false)}/>}
        </div>
    </>)
    
}
