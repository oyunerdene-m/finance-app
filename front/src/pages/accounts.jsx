import {useState} from 'react';
import { getAccounts, addAccount, editAccount } from '../lib/accountData';
import AccountList from '../components/Accounts/AccountList';
import CreateAccount from '../components/Accounts/CreateAccount';
import EditAccount from '../components/Accounts/EditAccount';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

export default function Accounts() {
    const [accounts, setAccounts] = useState([]);
    const [showAccounts, setShowAccounts] = useState(false);
    const [isFormShow, setIsFormShow] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedAccount, setEditedAccount] = useState();

    useEffect(() => {
        console.log('useeffec')
        async function fetchData() {
          const response = await getAccounts();
          setAccounts(response)
        }
        fetchData();
      }, []); 
    console.log(accounts)

    async function addAccountHandler(accountData){
        console.log(accountData)

        const addedAccount = await addAccount(accountData);
        console.log(addedAccount)
        setAccounts(prevAccounts => [...prevAccounts, addedAccount])
        console.log(accounts)
        setIsFormShow(false)
    }
    console.log(accounts)


    function closeHandler(){
        setIsFormShow(false);
    }

    function editingAccount(id){
        setIsEditing(true)
        accounts.forEach(account => {
            if(account.id === id){
                setEditedAccount(account)
            }
        });
    }

    async function editAccountHandler(id, editedAccountData){
        // const updatedAccounts = await editAccount(id, editedAccountData)
        // setAccounts(updatedAccounts)

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
        <Link to="/">Home</Link>
        <div>
            <button onClick={()=>setShowAccounts(!showAccounts)}>{showAccounts ? "Hide": "Show"} accounts</button>
            {showAccounts && <AccountList accounts={accounts} onEditing={editingAccount} onDelete={deleteAccountHandler}/>}
        </div>
        <div>
            {isFormShow ? '': <button onClick={()=>setIsFormShow(true)}>Add Account</button>}
            {isFormShow && <CreateAccount onAddAccount={addAccountHandler} onCloseForm={closeHandler}/>}
            {isEditing && <EditAccount account= {editedAccount} onEditAccount={editAccountHandler} onCancel={()=>setIsEditing(false)}/>}
        </div>
        <div>
            <Link to="/transactions">Transactions</Link>
        </div>
    </>)
    
}
