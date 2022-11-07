const DUMMY_ACCOUNTS = [
	{
		id: Math.random().toString(),
		name: 'My hudaldaa',
		type: 'savings',
		amount: 1000,
		currency: '€',
		description: 'Mongol dans',
	},
	{
		id: Math.random().toString(),
		name: 'Degi wallet',
		type: 'cash',
		amount: 100,
		currency: '$',
		description: 'degis money',
	},
	{
		id: Math.random().toString(),
		name: 'My haan',
		type: 'loan',
		amount: 80000,
		currency: '₮',
		description: 'Bat-d',
	},
];

function getAccounts() {
	return DUMMY_ACCOUNTS;
}

export { getAccounts };
