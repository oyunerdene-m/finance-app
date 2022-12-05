export default function Form({ formType, onInputChange, onFormSubmit }) {
	return (
		<div class='w-full max-w-xs'>
			<h4>{formType}</h4>
			<form onSubmit={onFormSubmit} class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				{formType === 'Signup' && (
					<div class='mb-4'>
						<label class='block text-gray-700 text-sm font-bold mb-2' for='name'>
							Username
						</label>
						<input
							class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							onChange={onInputChange}
							id='name'
							name='name'
							type='text'
							placeholder='Username'
						/>
					</div>
				)}

				<div class='mb-6'>
					<label class='block text-gray-700 text-sm font-bold mb-2' for='email'>
						Email
					</label>
					<input
						class='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						id='email'
						type='text'
						onChange={onInputChange}
						name='email'
						placeholder='Email'
					/>
				</div>
				<div class='mb-6'>
					<label class='block text-gray-700 text-sm font-bold mb-2' for='password'>
						Password
					</label>
					<input
						class='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						id='password'
						type='password'
						onChange={onInputChange}
						name='password'
						placeholder='******************'
					/>
					{formType === 'Signup' && (
						<p class='text-red-500 text-xs italic'>Please choose a password.</p>
					)}
				</div>
				<div class='flex items-center justify-between'>
					<button
						class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						{formType}
					</button>
				</div>
			</form>
		</div>
	);
}
