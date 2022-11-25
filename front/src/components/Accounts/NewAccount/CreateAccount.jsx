import { useState } from 'react';
import AccountForm from './AccountForm';

export default function CreateAccount({ onAddAccount, onCloseForm }) {
	const [accountData, setAccountData] = useState({
		name: '',
		amount: 0,
		description: '',
		type: '',
		currency: '',
	});

	function changeHandler(event) {
		const { name, value } = event.target;
		setAccountData((prevAccountData) => {
			return {
				...prevAccountData,
				[name]: value,
			};
		});
	}

	function submitHandler(e) {
		e.preventDefault();
		if (accountData.name.trim().length === 0 || accountData.amount.length === 0) {
			return;
		}
		onAddAccount(accountData);
	}

	return (
		<AccountForm
			onCloseForm={onCloseForm}
			accountData={accountData}
			onChangeInput={changeHandler}
			onSubmitForm={submitHandler}
		/>
	);
}
