import { useState, useEffect, createContext, useContext } from 'react';
import fetchData from '../lib/fetchData';
import CurrentUserContext from './currentUser-context';

const AccountsContext = createContext({
	accounts: [],
});

export const AccountsContextProvider = (props) => {
	const { currentUser } = useContext(CurrentUserContext);
	const [accounts, setAccounts] = useState([]);

	useEffect(() => {
		async function getAccounts() {
			try {
				const response = await fetchData('/api/v1/accounts', 'GET', undefined);
				setAccounts(response.accounts);
			} catch (error) {
				console.error(error);
				alert(error);
			}
		}
		if (currentUser) {
			getAccounts();
		}
	}, [currentUser]);

	return (
		<AccountsContext.Provider value={{ accounts, setAccounts }}>
			{props.children}
		</AccountsContext.Provider>
	);
};

export default AccountsContext;
