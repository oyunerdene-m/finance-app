import { useState, useEffect, createContext } from 'react';

const AccountsContext = createContext({
	accounts: [],
});

export const AccountsContextProvider = (props) => {
	const [accounts, setAccounts] = useState([]);

	useEffect(() => {
		async function getAccounts() {
			const response = await fetch('/api/v1/accounts');
			if (!response.ok) {
				const message = `Error occured in ${response.status}`;
				throw new Error(message);
			}
			const data = await response.json();
			if (data.error) {
				alert(data.error);
			} else {
				setAccounts(data.data.accounts);
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
