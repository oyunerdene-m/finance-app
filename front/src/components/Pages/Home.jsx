import {useState} from 'react';
import { getAccounts } from '../../lib/accounts';
import AccountList from '../Accounts/AccountList';
import CreateAccount from '../Accounts/CreateAccount';

export default function Home({currentUser}) {
    const [accounts, setAccounts] = useState(getAccounts());
    const [showAccounts, setShowAccounts] = useState(false);
    const [isFormShow, setIsFormShow] = useState(false)

    return (
    <>
        <h1>Finance App</h1>
        <div style={{marginBottom: "10px"}}>  Hello, {currentUser.name} <a href="#.com">logout</a></div>
        <div>
            <button onClick={()=>setShowAccounts(!showAccounts)}>{showAccounts ? "Hide": "Show"} accounts</button>
            {showAccounts && <AccountList accounts={accounts}/>}
        </div>
        <div>
            {isFormShow ? '': <button onClick={()=>setIsFormShow(true)}>Add Account</button>}
            {isFormShow && <CreateAccount/>}
        </div>
    </>)
    
}
