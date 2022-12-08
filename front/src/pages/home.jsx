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
				<div className='flex flex-col p-10 text-left'>
					<div className='mb-5'>
						<p className='mb-2'>Total balance</p>
						<div className='text-xl'>
							{' '}
							<span>€{totalEur}</span>, <span>${totalDollar}</span>, <span>₮{totalTugrug}</span>
						</div>
					</div>
					<div className='flex justify-between pb-6 border-b-[1px] border-light-gray'>
						<div>
							<p className='text-more-gray'>Income</p>
							<span>$3600</span>
						</div>
						<div>
							<p className='text-more-gray'>Expense</p>
							<span>$560</span>
						</div>
						<div>
							<p className='text-more-gray'>Credit Limit</p>
							<span>$1000</span>
						</div>
					</div>
					<div className='pt-7 pb-6 border-b-[1px] border-light-gray'>
						<Accounts />
					</div>
					<div className='pt-2'>
						<Transactions />
					</div>
				</div>
			) : (
				<Login />
			)}
		</>
	);
}
