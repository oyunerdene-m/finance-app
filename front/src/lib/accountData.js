let DUMMY_ACCOUNTS = [
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
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(DUMMY_ACCOUNTS);
		}, 1000);
	});
}

function addAccount(accountData) {
	const newAccountData = {
		...accountData,
		id: Math.random().toString(),
	};
	DUMMY_ACCOUNTS.push(newAccountData);

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(newAccountData);
		}, 1000);
	});
}

function editAccount(id, accountData) {
	DUMMY_ACCOUNTS = DUMMY_ACCOUNTS.map((account) => {
		if (account.id === id) {
			return {
				...account,
				name: accountData.name,
				amount: accountData.amount,
				description: accountData.description,
				type: accountData.type,
				currency: accountData.currency,
			};
		} else {
			return account;
		}
	});
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(DUMMY_ACCOUNTS);
		}, 1000);
	});
}
export { getAccounts, addAccount, editAccount };
