import Button from '../../UI/Button';
import { closeIcon } from '../../../assets/icons/icons';

export default function AccountForm({ onChangeInput, onSubmitForm, accountData, onCloseForm }) {
	const isEditing = accountData.name.length > 0;

	return (
		<div class='w-full max-w-xs'>
			<form
				onSubmit={onSubmitForm}
				className='relative bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4'
			>
				<span className='absolute right-2 top-2 cursor-pointer' onClick={onCloseForm}>
					{closeIcon}
				</span>

				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
						Account name:
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={accountData.name}
						onChange={onChangeInput}
						type='text'
						id='name'
						name='name'
						placeholder='Account name'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='amount'>
						Amount:
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={accountData.amount}
						onChange={onChangeInput}
						type='number'
						id='amount'
						name='amount'
						placeholder='Amount'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>
						Description:
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={accountData.description}
						onChange={onChangeInput}
						type='text'
						id='description'
						name='description'
						placeholder='Description'
					/>
				</div>
				<div className='mb-4'>
					<label className='text-gray-700 text-sm font-bold mb-2 mr-3' htmlFor='type'>
						Type:
					</label>
					<select value={accountData.type} onChange={onChangeInput} name='type' id='type'>
						<option value=''>Choose type</option>
						<option value='cash'>Cash</option>
						<option value='card'>Card</option>
						<option value='savings'>Savings</option>
						<option value='loan'>Loan</option>
						<option value='others'>Others</option>
					</select>
				</div>
				<div>
					<label className='text-gray-700 text-sm font-bold mb-2 mr-3' htmlFor='currency'>
						Currency:
					</label>
					<select
						value={accountData.currency}
						onChange={onChangeInput}
						name='currency'
						id='currency'
					>
						<option value=''>Choose currency</option>
						<option value='€'>Euro</option>
						<option value='$'>Dollar</option>
						<option value='₮'>Tugrug</option>
					</select>
				</div>
				<div className='flex items-center justify-between'>
					<Button name={isEditing ? 'Save' : 'Add Account'} type='submit' />
					<Button onClick={onCloseForm} name='Cancel' type='button' />
				</div>
			</form>
		</div>
	);
}
