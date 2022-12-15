import { useContext } from 'react';
import AccountsContext from '../../../context/accounts-context';
import { categories } from '../../../lib/transactionCategories';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';

export default function TransactionForm({ type, onFormSubmit, onChange, formData }) {
	const { accounts } = useContext(AccountsContext);

	let account;
	if (type === 'transfer') {
		account = (
			<>
				<div className='mb-4'>
					<label className='block text-sm font-bold mb-2' htmlFor='from'>
						From:{' '}
					</label>
					<select
						className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
						value={formData.from}
						onChange={onChange}
						name='from'
						id='from'
					>
						<option value=''>--Choose account--</option>
						{accounts.map((account) => (
							<option key={account.id} value={account.name}>
								{account.name}
								&nbsp; &nbsp;
								{`/${account.amount} ${account.currency}/`}
							</option>
						))}
					</select>
				</div>
				<div className='mb-4'>
					<label className='block text-sm font-bold mb-2' htmlFor='to'>
						To:{' '}
					</label>
					<select
						className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
						value={formData.to}
						onChange={onChange}
						name='to'
						id='to'
					>
						<option value=''>--Choose account--</option>
						{accounts.map((account) => (
							<option key={account.id} value={account.name}>
								{account.name}
								&nbsp; &nbsp;
								{`/${account.amount} ${account.currency}/`}
							</option>
						))}
					</select>
				</div>
			</>
		);
	} else {
		if (type === 'income') {
			account = (
				<div className='mb-4'>
					<label className='block text-sm font-bold mb-2' htmlFor='to'>
						To:{' '}
					</label>
					<select
						className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
						value={formData.to}
						onChange={onChange}
						name='to'
						id='to'
					>
						<option value=''>--Choose account--</option>
						{accounts.length <= 0
							? 'Loading...'
							: accounts.map((account) => (
									<option key={account.id} value={account.name}>
										{account.name}
										&nbsp; &nbsp;
										{`/${account.amount} ${account.currency}/`}
									</option>
							  ))}
					</select>
				</div>
			);
		} else {
			account = (
				<div className='mb-4'>
					<label className='block text-sm font-bold mb-2' htmlFor='from'>
						From:{' '}
					</label>
					<select
						className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
						value={formData.from}
						onChange={onChange}
						name='from'
						id='from'
					>
						<option value=''>--Choose account--</option>
						{accounts.length <= 0
							? 'Loading...'
							: accounts.map((account) => (
									<option key={account.id} value={account.name}>
										{account.name}
										&nbsp; &nbsp;
										{`/${account.amount} ${account.currency}/`}
									</option>
							  ))}
					</select>
				</div>
			);
		}
	}
	return (
		<div className='w-full text-left'>
			<form className='bg-white shadow-xl rounded px-8 pt-6 pb-6' onSubmit={(e) => onFormSubmit(e)}>
				<div className='mb-4'>
					<label className='block text-sm font-bold mb-2' htmlFor='date'>
						Date:{' '}
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
						value={formData.date}
						onChange={onChange}
						type='date'
						name='date'
						id='date'
					/>
				</div>
				{account}
				{type !== 'transfer' && (
					<div className='mb-4'>
						<label className='block text-sm font-bold mb-2' htmlFor='category'>
							Category:{' '}
						</label>
						<select
							className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
							value={formData.category}
							onChange={onChange}
							name='category'
							id='category'
						>
							<option value=''>--Choose category--</option>
							{categories[type].map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
					</div>
				)}

				<div className='mb-4'>
					<label className='block text-sm font-bold mb-2' htmlFor='amount'>
						{type === 'transfer' ? 'Sending Amount:' : 'Amount:'}
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
						value={formData.amount}
						onChange={onChange}
						type='number'
						name='amount'
						id='amount'
					/>
				</div>
				{type === 'transfer' && (
					<div className='mb-4'>
						<label className='block text-sm font-bold mb-2' htmlFor='receive'>
							Receiving Amount:
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
							value={formData.receive}
							onChange={onChange}
							type='number'
							name='receive'
							id='receive'
						/>
					</div>
				)}

				<div>
					<label className='block text-sm font-bold mb-2' htmlFor='description'>
						Description:{' '}
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
						value={formData.description}
						onChange={onChange}
						type='text'
						name='description'
						id='description'
					/>
				</div>
				<div className='flex items-center justify-between'>
					<Button name='Save' type='submit' />
					<Link to='/transactions'>
						<Button name='Cancel' type='button' />
					</Link>
				</div>
			</form>
		</div>
	);
}
