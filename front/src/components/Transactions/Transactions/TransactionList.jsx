import TransactionItem from './TransactionItem';

export default function TransactionList({ transactions }) {
	return (
		<div className='p-4 rounded shadow-2xl'>
			<ul>
				{transactions.map((transaction) => (
					<TransactionItem key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</div>
	);
}
