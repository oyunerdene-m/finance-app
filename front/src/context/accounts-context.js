import { useState, useEffect, createContext } from 'react';
import fetchData from '../lib/fetchData';

const AccountsContext = createContext({
	accounts: [],
});

export const AccountsContextProvider = (props) => {
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
		getAccounts();
	}, []);

	return (
		<AccountsContext.Provider value={{ accounts, setAccounts }}>
			{props.children}
		</AccountsContext.Provider>
	);
};

export default AccountsContext;
