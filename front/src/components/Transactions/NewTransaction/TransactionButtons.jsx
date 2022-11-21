export default function TransactionButtons({ onType, transactionType }) {
	function clickHandler(e) {
		onType(e.target.name);
	}

	return (
		<div>
			<button
				style={{ background: transactionType === 'income' && '#00c0ff' }}
				name='income'
				onClick={clickHandler}
			>
				Income
			</button>
			<button
				style={{ background: transactionType === 'expense' && '#00c0ff' }}
				name='expense'
				onClick={clickHandler}
			>
				Expense
			</button>
			<button
				style={{ background: transactionType === 'transfer' && '#00c0ff' }}
				name='transfer'
				onClick={clickHandler}
			>
				Transfer
			</button>
		</div>
	);
}
