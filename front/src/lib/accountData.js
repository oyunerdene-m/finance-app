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
			resolve([...DUMMY_ACCOUNTS]);
		}, 500);
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
		}, 500);
	});
}

function editAccount(id, accountData) {
	let foundAccount = DUMMY_ACCOUNTS.find((account) => account.id === id);
	foundAccount = {
		...foundAccount,
		name: accountData.name,
		amount: accountData.amount,
		description: accountData.description,
		type: accountData.type,
		currency: accountData.currency,
	};

	DUMMY_ACCOUNTS = DUMMY_ACCOUNTS.map((account) => {
		return account.id === id ? foundAccount : account;
	});

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(foundAccount);
		}, 500);
	});
}

function deleteAccount(id) {
	DUMMY_ACCOUNTS = DUMMY_ACCOUNTS.map((account) => account.id !== id);

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 500);
	});
}

export { getAccounts, addAccount, editAccount, deleteAccount };
