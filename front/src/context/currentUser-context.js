import { useState, useEffect, createContext } from 'react';
import fetchData from '../lib/fetchData';

const CurrentUserContext = createContext({ currentUser: null });

export const CurrentUserProvider = (props) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		async function getCurrentUser() {
			try {
				const response = await fetchData('/api/v1/users/current-user', 'GET', undefined);
				setCurrentUser(response.user);
			} catch (error) {
				console.error(error);
				alert(error);
			}
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
