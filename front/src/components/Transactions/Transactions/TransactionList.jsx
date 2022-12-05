import TransactionItem from './TransactionItem';

export default function TransactionList({ transactions }) {
	return (
		<ul>
			{transactions.map((transaction) => (
				<TransactionItem key={transaction.id} transaction={transaction} />
			))}
		</ul>
	);
}
