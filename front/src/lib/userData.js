const DUMMY_USERS = [
	{ id: Math.random().toString(), name: 'Max', password: 'max123' },
	{ id: Math.random().toString(), name: 'Jenny', password: 'jenny456' },
	{ id: Math.random().toString(), name: 'Rupert', password: 'rupert789' },
];

function getUsers() {
	return DUMMY_USERS;
}

function addUser(name, password) {
	const newUser = {
		id: Math.random().toString(),
		name: name,
		password: password,
	};
	return [...getUsers(), newUser];
}

export { getUsers, addUser };
