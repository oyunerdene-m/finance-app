import TransactionItem from './TransactionItem';

export default function TransactionList({ transactions, onDelete }) {
	return (
		<ul
			style={{
				border: '1px solid teal',
				width: '30%',
				margin: '0 auto',
				padding: '10px 10px',
			}}
		>
			{transactions.map((transaction) => (
				<TransactionItem onDelete={onDelete} key={transaction.id} transaction={transaction} />
			))}
		</ul>
	);
}
