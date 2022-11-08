import {useState} from 'react';
import classes from './CreateAccount.module.css'


export default function CreateAccount({onAddAccount, onCloseForm}){
    const [accountData, setAccountData] = useState(
        {
            name: '',
            amount: 0,
            description: '',
            type: '',
            currency: ''
        }
    )
    
    function changeHandler(event){
        const {name, value} = event.target;
        setAccountData(prevAccountData=>{
            return {
                ...prevAccountData,
                [name]: value
            }
        })
    }

    function submitHandler(e){
        e.preventDefault();
        if(accountData.name.trim().length === 0 || accountData.amount.length === 0){
            return;
        }
        onAddAccount(accountData)
    }

    function closeHandler(event){
        event.stopPropagation()
        onCloseForm()
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <span onClick={closeHandler} className={classes.close}>X</span>
            <div>
                <label htmlFor="name">Account name:</label>
                <input value={accountData.name} onChange={changeHandler} type="text" id="name" name="name"/>
            </div>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input value={accountData.amount} onChange={changeHandler} type="number" id="amount" name="amount"/>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input value={accountData.description} onChange={changeHandler} type="text" id="description" name="description"/>
            </div>
            <div>
                <label htmlFor="type">Type:</label>
                <select value={accountData.type} onChange={changeHandler} name="type" id="type">
                    <option value="">Choose type</option>
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                    <option value="savings">Savings</option>
                    <option value="loan">Loan</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div>
                <label htmlFor="currency">Currency:</label>
                <select value={accountData.currency} onChange={changeHandler} name="currency" id="currency">
                    <option value="">Choose currency</option>
                    <option value="€">Euro</option>
                    <option value="$">Dollar</option>
                    <option value="₮">Tugrug</option>
                </select>
            </div>
            <div>
                <button>Add Account</button>
            </div>
        </form>
    )
}