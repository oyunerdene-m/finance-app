import {Link} from 'react-router-dom';

export default function Transactions(){
    return (
        <div>
            <h1>This is Transactions page!</h1>
            <div>
                <button>Income</button>
                <button>Expense</button>
                <Link to="/transactions/transfer">Transfer</Link>
            </div>
        </div>
    )
}