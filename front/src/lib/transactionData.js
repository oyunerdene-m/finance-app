let DUMMY_TRANSACTIONS = [
	{
		id: 1,
		date: '2022-02-20',
		type: 'income',
		from: '',
		to: 'My haan',
		category: 'Salary',
		amount: 900,
		description: 'my salary',
	},

	{
		id: 2,
		date: '2020-12-28',
		type: 'expense',
		from: 'Degi wallet',
		to: '',
		category: 'Food',
		amount: 60,
		description: 'new year meal',
	},

	{
		id: 3,
		date: '2022-02-20',
		type: 'income',
		from: '',
		to: 'My tdb',
		category: 'Other',
		amount: 100,
		description: 'other income',
	},

	{
		id: 4,
		date: '2021-12-20',
		type: 'transfer',
		from: 'Degi wallet',
		to: 'My haan',
		category: 'Transfer',
		amount: 300,
		description: 'to get gift',
	},
	{
		id: 5,
		date: '2021-12-22',
		type: 'expense',
		from: 'My haan',
		to: '',
		category: 'Gift',
		amount: 100,
		description: 'Bat birthday gift',
	},

	{
		id: 6,
		date: '2022-07-10',
		type: 'transfer',
		from: 'My haan',
		to: 'My tdb',
		category: 'Transfer',
		amount: 200,
		description: 'shiljuleg',
	},
];

function getTransactions() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([...DUMMY_TRANSACTIONS]);
		}, 500);
	});
}

function addTransaction(newTransaction) {
	const addedTransaction = {
		...newTransaction,
		id: DUMMY_TRANSACTIONS.length + 1,
	};

	DUMMY_TRANSACTIONS.push(addedTransaction);

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(addedTransaction);
		}, 500);
	});
}

function getTransactionById(id) {
	const foundTransaction = DUMMY_TRANSACTIONS.find((transaction) => transaction.id === Number(id));
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(foundTransaction);
		}, 500);
	});
}

function editTransaction(id, edited) {
	let foundTransaction = DUMMY_TRANSACTIONS.find((transaction) => transaction.id === Number(id));

	if (!foundTransaction) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(null);
			}, 500);
		});
	}
	foundTransaction = {
		...foundTransaction,
		date: edited.date,
		type: edited.type,
		from: edited.from,
		to: edited.to,
		category: edited.category,
		amount: edited.amount,
		description: edited.description,
	};

	DUMMY_TRANSACTIONS = DUMMY_TRANSACTIONS.map((transaction) =>
		transaction.id === Number(id) ? foundTransaction : transaction,
	);

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(foundTransaction);
		}, 500);
	});
}

function deleteTransaction(id) {
	const deleted = DUMMY_TRANSACTIONS.find((transaction) => transaction.id === Number(id));
	DUMMY_TRANSACTIONS = DUMMY_TRANSACTIONS.filter((transaction) => transaction.id !== Number(id));

	if (!deleted) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(null);
			}, 500);
		});
	}

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(deleted);
		}, 500);
	});
}

export { getTransactions, addTransaction, getTransactionById, editTransaction, deleteTransaction };
