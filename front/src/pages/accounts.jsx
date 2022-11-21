import { useState, useContext } from 'react';
import { addAccount, editAccount, deleteAccount } from '../lib/accountData';
import AccountList from '../components/Accounts/AccountList';
import CreateAccount from '../components/Accounts/CreateAccount';
import EditAccount from '../components/Accounts/EditAccount';
import { Link } from 'react-router-dom';
import AccountsContext from '../context/accounts-context';

export default function Accounts() {
	const { accounts, setAccounts } = useContext(AccountsContext);
	const [isFormShow, setIsFormShow] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editedAccount, setEditedAccount] = useState();

	async function addAccountHandler(accountData) {
		const addedAccount = await addAccount(accountData);
		setAccounts((prevAccounts) => [...prevAccounts, addedAccount]);
		setIsFormShow(false);
	}

	function closeHandler() {
		setIsFormShow(false);
	}

	function editingAccount(id) {
		setIsEditing(true);
		accounts.forEach((account) => {
			if (account.id === id) {
				setEditedAccount(account);
			}
		});
	}

	async function editAccountHandler(id, editedAccountData) {
		const updatedAccount = await editAccount(id, editedAccountData);
		setAccounts((prevAccounts) =>
			prevAccounts.map((account) => {
				return account.id === id ? updatedAccount : account;
			}),
		);
		setIsEditing(false);
	}

	async function deleteAccountHandler(id) {
		await deleteAccount(id);
		setAccounts((prevAccounts) => prevAccounts.filter((account) => account.id !== id));
	}

	return (
		<>
			<div>
				<Link to='/'>Home</Link>
			</div>
			<br />
			<div>
				<AccountList
					accounts={accounts}
					onEditing={editingAccount}
					onDelete={deleteAccountHandler}
				/>
			</div>
			<br />

			<div>
				{isFormShow ? '' : <button onClick={() => setIsFormShow(true)}>Add Account</button>}
				{isFormShow && (
					<CreateAccount onAddAccount={addAccountHandler} onCloseForm={closeHandler} />
				)}
				{isEditing && (
					<EditAccount
						account={editedAccount}
						onEditAccount={editAccountHandler}
						onCancel={() => setIsEditing(false)}
					/>
				)}
			</div>
			<br />

			<div>
				<Link to='/transactions/new'>New transaction</Link>
			</div>
		</>
	);
}
