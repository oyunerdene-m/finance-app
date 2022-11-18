import { useState, useEffect, createContext } from 'react';
import { getAccounts } from '../lib/accountData';

const AccountsContext = createContext({
	accounts: [],
});

export const AccountsContextProvider = (props) => {
	const [accounts, setAccounts] = useState([]);
	useEffect(() => {
		async function fetchAccounts() {
			const data = await getAccounts();
			setAccounts(data);
		}
		fetchAccounts();
	}, []);

	return (
		<AccountsContext.Provider value={{ accounts, setAccounts }}>
			{props.children}
		</AccountsContext.Provider>
	);
};

export default AccountsContext;
