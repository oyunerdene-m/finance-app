import Accounts from './accounts';
import Transactions from './transactions';
import Login from '../components/Users/Login';
import { useContext } from 'react';
import AccountsContext from '../context/accounts-context';

export default function Home({ currentUser }) {
	const { accounts } = useContext(AccountsContext);

	let totalEur = 0;
	let totalDollar = 0;
	let totalTugrug = 0;
	for (let el of accounts) {
		if (el.currency === '$') {
			totalDollar += parseInt(el.amount);
		} else if (el.currency === '₮') {
			totalTugrug += parseInt(el.amount);
		} else {
			totalEur += parseInt(el.amount);
		}
	}

	return (
		<>
			{currentUser !== null ? (
				<>
					<h1>Finance App!!!!</h1>
					<h3>
						Total balance: <i>€{totalEur}</i>, <i>${totalDollar}</i>, <i>₮{totalTugrug}</i>
					</h3>

					<Accounts />
					<Transactions />
				</>
			) : (
				<Login />
			)}
		</>
	);
}
