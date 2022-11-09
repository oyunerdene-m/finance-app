export default function Transfer(){
    return (
        <form>
            <div>
                <label htmlFor="date">Date: </label>
                <input type="date" name="date" id="date"/>
            </div>
            <div>
                <label htmlFor="from">From: </label>
                <input type="text" name="from" id="from"/>
            </div>
            <div>
                <label htmlFor="to">To: </label>
                <input type="text" name="to" id="to"/>
            </div>
            <div>
                <label htmlFor="amount">Amount: </label>
                <input type="number" name="amount" id="amount"/>
            </div>
            <div>
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" id="description"/>
            </div>
            <div>
                <button>Save</button>
                <a href="">continue</a>
            </div>
        </form>
    )
}