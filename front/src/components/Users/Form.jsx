import Button from '../UI/Button';

export default function Form({ formType, onInputChange, onFormSubmit }) {
	return (
		<div className='w-full max-w-xs m-auto mt-6'>
			<h4 className='text-xl mb-2'>{formType}</h4>
			<form onSubmit={onFormSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				{formType === 'Signup' && (
					<div className='mb-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
							Username
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							onChange={onInputChange}
							id='name'
							name='name'
							type='text'
							placeholder='Username'
						/>
					</div>
				)}

				<div className='mb-6'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
						Email
					</label>
					<input
						className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						id='email'
						type='text'
						onChange={onInputChange}
						name='email'
						placeholder='Email'
					/>
				</div>
				<div>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
						Password
					</label>
					<input
						className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						id='password'
						type='password'
						onChange={onInputChange}
						name='password'
						placeholder='******************'
					/>
					{formType === 'Signup' && (
						<p className='text-red-500 text-xs italic'>Please choose a password.</p>
					)}
				</div>
				<div className='flex items-center justify-center'>
					<Button type='submit' name={formType === 'Signup' ? 'Signup' : 'Login'}>
						{formType}
					</Button>
				</div>
			</form>
		</div>
	);
}
