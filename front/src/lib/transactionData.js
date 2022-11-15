const DUMMY_TRANSACTIONS = [
	{
		id: Math.random().toString(),
		date: '2022-02-20',
		type: 'income',
		from: '',
		to: 'My haan',
		category: 'Salary',
		amount: 900,
		description: 'my salary',
	},

	{
		id: Math.random().toString(),
		date: '2020-12-28',
		type: 'expense',
		from: 'Degi wallet',
		to: '',
		category: 'Food',
		amount: 60,
		description: 'new year meal',
	},

	{
		id: Math.random().toString(),
		date: '2022-02-20',
		type: 'income',
		from: '',
		to: 'My tdb',
		category: 'Other',
		amount: 100,
		description: 'other income',
	},

	{
		id: Math.random().toString(),
		date: '2021-12-20',
		type: 'transfer',
		from: 'Degi tdb',
		to: 'My haan',
		category: 'Transfer',
		amount: 300,
		description: 'to get gift',
	},
	{
		id: Math.random().toString(),
		date: '2021-12-22',
		type: 'expense',
		from: 'My haan',
		to: '',
		category: 'Gift',
		amount: 100,
		description: 'Bat birthday gift',
	},

	{
		id: Math.random().toString(),
		date: '2022-07-10',
		type: 'transfer',
		from: 'My xas',
		to: 'My tdb',
		category: 'Transfer',
		amount: 200,
		description: 'shiljuleg',
	},
];

const incomeCategories = ['Salary', 'Bonus', 'Cash', 'Allowance', 'Other'];
const expenseCategories = [
	'Food',
	'Transportation',
	'Education',
	'Household',
	'Health',
	'Gift',
	'Clothes',
	'Beauty',
	'Other',
];

function getTransactions() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([...DUMMY_TRANSACTIONS]);
		}, 500);
	});
}

export { getTransactions };
