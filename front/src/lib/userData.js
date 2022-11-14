const DUMMY_USERS = [
	{ id: Math.random().toString(), name: 'Max', password: 'max123' },
	{ id: Math.random().toString(), name: 'Jenny', password: 'jenny456' },
	{ id: Math.random().toString(), name: 'Rupert', password: 'rupert789' },
];

function getUsers() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([...DUMMY_USERS]);
		}, 1000);
	});
}

function addUser(name, password) {
	const newUser = {
		id: Math.random().toString(),
		name: name,
		password: password,
	};

	DUMMY_USERS.push(newUser);

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 1000);
	});
}

export { getUsers, addUser };
