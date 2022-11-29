import { useState, useEffect, createContext } from 'react';

const CurrentUserContext = createContext({ currentUser: '' });

export const CurrentUserProvider = (props) => {
	const [currentUser, setCurrentUser] = useState('');

	useEffect(() => {
		async function getCurrentUser() {
			const response = await fetch('/api/v1/users/current-user');
			if (!response.ok) {
				const message = `Error occured in ${response.status}`;
				throw new Error(message);
			}
			const res = await response.json();

			setCurrentUser(res.data.user);
		}
		getCurrentUser();
	}, []);

	return (
		<CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
			{props.children}
		</CurrentUserContext.Provider>
	);
};

export default CurrentUserContext;
