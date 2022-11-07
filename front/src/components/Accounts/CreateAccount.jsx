export default function CreateAccount(){
    return (
        <form>
            <label htmlFor="name">Account name:</label>
            <input type="text" id="name" name="name"/>
            <br/>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" name="amount"/>
            <br/>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description"/>
            <br/>
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="savings">Savings</option>
                <option value="loan">Loan</option>
                <option value="others">Others</option>
            </select>
            <br/>
            <label htmlFor="currency">Currency</label>
            <select name="currency" id="currency">
                <option value="euro">Euro</option>
                <option value="dollar">Dollar</option>
                <option value="tugrug">Tugrug</option>
            </select>
        </form>
    )
}