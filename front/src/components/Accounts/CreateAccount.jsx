import {useState} from 'react';
import classes from './CreateAccount.module.css'


export default function CreateAccount(){
    const [accountData, setAccountData] = useState(
        {
            name: '',
            amount: 0,
            description: '',
            type: '',
            currency: ''
        }
    )

    function changeHandler(e){
        console.log(e.target)
    }
    return (
        <form className={classes.form}>
            <div>
                <label htmlFor="name">Account name:</label>
                <input onChange={changeHandler} type="text" id="name" name="name"/>
            </div>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input onChange={changeHandler} type="number" id="amount" name="amount"/>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input onChange={changeHandler} type="text" id="description" name="description"/>
            </div>
            <div>
                <label htmlFor="type">Type:</label>
                <select onChange={changeHandler} name="type" id="type">
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                    <option value="savings">Savings</option>
                    <option value="loan">Loan</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div>
                <label htmlFor="currency">Currency:</label>
                <select onChange={changeHandler} name="currency" id="currency">
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