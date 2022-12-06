import { useContext } from 'react';
import AccountsContext from '../../../context/accounts-context';
import { categories } from '../../../lib/transactionCategories';
import { Link } from 'react-router-dom';

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
						<option value=''>Choose account</option>
						{accounts.map((account) => (
							<option key={account.id} value={account.name}>
								{account.name}
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
						<option value=''>Choose account</option>
						{accounts.map((account) => (
							<option key={account.id} value={account.name}>
								{account.name}
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
						<option value=''>Choose account</option>
						{accounts.length <= 0
							? 'Loading...'
							: accounts.map((account) => (
									<option key={account.id} value={account.name}>
										{account.name}
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
						<option value=''>Choose account</option>
						{accounts.length <= 0
							? 'Loading...'
							: accounts.map((account) => (
									<option key={account.id} value={account.name}>
										{account.name}
									</option>
							  ))}
					</select>
				</div>
			);
		}
	}
	return (
		<div style={{ border: '1px solid purple' }} className='w-full max-w-xs'>
			<form
				className='bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4'
				onSubmit={(e) => onFormSubmit(e)}
			>
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
							<option value=''>Choose category</option>
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
						Amount:{' '}
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
				<div>
					<button>Save</button>
				</div>
			</form>
			<button>
				<Link style={{ textDecoration: 'none', color: 'black' }} to='/transactions'>
					Cancel
				</Link>
			</button>
		</div>
	);
}
