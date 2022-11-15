export default function TransactionButtons({ onClick }) {
	return (
		<div>
			<button onClick={() => onClick('income')}>Income</button>
			<button onClick={() => onClick('expense')}>Expense</button>
			<button onClick={() => onClick('transfer')}>Transfer</button>
		</div>
	);
}
