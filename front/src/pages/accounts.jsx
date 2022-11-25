import { useState, useContext } from 'react';
import { addAccount, editAccount, deleteAccount } from '../lib/accountData';
import AccountList from '../components/Accounts/Accounts/AccountList';
import CreateAccount from '../components/Accounts/NewAccount/CreateAccount';
import EditAccount from '../components/Accounts/EditAccount';
import { Link } from 'react-router-dom';
import AccountsContext from '../context/accounts-context';
import Modal from '../components/UI/Modal';
import Confirmation from '../components/UI/Confirmation';

export default function Accounts() {
	const { accounts, setAccounts } = useContext(AccountsContext);
	const [isFormShow, setIsFormShow] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [editedAccount, setEditedAccount] = useState();
	const [deletedAccountId, setDeletedAccountId] = useState('');

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

	async function deleteAccountHandler() {
		await deleteAccount(deletedAccountId);
		setAccounts((prevAccounts) =>
			prevAccounts.filter((account) => account.id !== deletedAccountId),
		);
		setIsDeleting(false);
	}

	return (
		<>
			{isDeleting && (
				<Modal onCancel={() => setIsDeleting(false)}>
					<Confirmation
						onCancel={() => setIsDeleting(false)}
						onDelete={deleteAccountHandler}
						name='account'
					/>
				</Modal>
			)}

			<div>
				<AccountList
					accounts={accounts}
					onEditing={editingAccount}
					onDelete={setDeletedAccountId}
					onDeleting={() => setIsDeleting(true)}
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
