import {useState} from 'react';
export default function CreateAccount(){

    return (
        <form>
            <label htmlFor="name">Account name:</label>
            <input onChange={changeHandler} type="text" id="name" name="name"/>
            <br/>
            <label htmlFor="amount">Amount</label>
            <input onChange={changeHandler} type="number" id="amount" name="amount"/>
            <br/>
            <label htmlFor="description">Description</label>
            <input onChange={changeHandler} type="text" id="description" name="description"/>
            <br/>
            <label htmlFor="type">Type</label>
            <select onChange={changeHandler} name="type" id="type">
                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="savings">Savings</option>
                <option value="loan">Loan</option>
                <option value="others">Others</option>
            </select>
            <br/>
            <label htmlFor="currency">Currency</label>
            <select onChange={changeHandler} name="currency" id="currency">
                <option value="€">Euro</option>
                <option value="$">Dollar</option>
                <option value="₮">Tugrug</option>
            </select>
        </form>
    )
}