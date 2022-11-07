const DUMMY_ACCOUNTS = [
	{
		id: Math.random().toString(),
		name: 'My hudaldaa',
		type: 'savings',
		initialBalance: 1000,
		currency: 'euro',
		bankName: 'Trade and development bank',
	},
	{
		id: Math.random().toString(),
		name: 'Degi wallet',
		type: 'salary',
		initialBalance: 1000,
		currency: 'euro',
		bankName: 'Deutsche bank',
	},
	{
		id: Math.random().toString(),
		name: 'My haan',
		type: 'savings',
		initialBalance: 80000,
		currency: 'tugrug',
		bankName: 'Khaan bank',
	},
];

function getAccounts() {
	return DUMMY_ACCOUNTS;
}

export { getAccounts };
