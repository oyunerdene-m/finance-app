const DUMMY_TRANSACTIONS = [
	{
		id: Math.random().toString(),
		date: '2022-02-20',
		type: 'income',
		from: '',
		to: 'My haan',
		category: 'salary',
		amount: 900,
		description: 'my salary',
	},

	{
		id: Math.random().toString(),
		date: '2020-12-28',
		type: 'expense',
		from: 'Degi wallet',
		to: '',
		category: 'food',
		amount: 60,
		description: 'new year meal',
	},

	{
		id: Math.random().toString(),
		date: '2022-02-20',
		type: 'income',
		from: '',
		to: 'My tdb',
		category: 'other',
		amount: 100,
		description: 'other income',
	},

	{
		id: Math.random().toString(),
		date: '2021-12-20',
		type: 'transfer',
		from: 'Degi tdb',
		to: 'My haan',
		category: 'transfer',
		amount: 300,
		description: 'to get gift',
	},
	{
		id: Math.random().toString(),
		date: '2021-12-22',
		type: 'expense',
		from: 'My haan',
		to: '',
		category: 'gift',
		amount: 100,
		description: 'Bat birthday gift',
	},

	{
		id: Math.random().toString(),
		date: '2022-07-10',
		type: 'transfer',
		from: 'My xas',
		to: 'My tdb',
		category: 'transfer',
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

export { getTransactions };
