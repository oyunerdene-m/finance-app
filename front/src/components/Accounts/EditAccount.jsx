import {useState} from 'react';
import classes from './EditAccount.module.css';

export default function EditAccount({account, onEditAccount}){
    const [editedAccount, setEditedAccount] = useState({
            name: account.name,
            amount: account.amount,
            description:  account.description,
            type:  account.type,
            currency:  account.currency
    });

    function changeHandler(event){
        const {name, value} = event.target;
        setEditedAccount(prevAccountData=>{
            return {
                ...prevAccountData,
                [name]: value
            }
        })
    }
    function submitHandler(e){
        e.preventDefault();
        onEditAccount(account.id, editedAccount)
    }

    return (
    <div>
      <div className={classes.backdrop} />
      <form onSubmit={submitHandler} className={classes.form}>
        <div>
            <label htmlFor="name">Account name:</label>
            <input value={editedAccount.name} onChange={changeHandler} type="text" id="name" name="name"/>
        </div>
        <div>
            <label htmlFor="amount">Amount:</label>
            <input value={editedAccount.amount} onChange={changeHandler} type="number" id="amount" name="amount"/>
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <input value={editedAccount.description} onChange={changeHandler} type="text" id="description" name="description"/>
        </div>
        <div>
            <label htmlFor="type">Type:</label>
            <select value={editedAccount.type} onChange={changeHandler} name="type" id="type">
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
            <select value={editedAccount.currency} onChange={changeHandler} name="currency" id="currency">
                <option value="">Choose currency</option>
                <option value="€">Euro</option>
                <option value="$">Dollar</option>
                <option value="₮">Tugrug</option>
            </select>
        </div>
        <div>
            <button type='submit'>Save</button>
            <button>Cancel</button>
        </div>
       </form>
    </div>
    )
}