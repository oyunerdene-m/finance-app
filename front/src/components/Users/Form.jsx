export default function Form({ user, onFormSubmit, onInputChange, errorMessage }) {
	return (
		<>
			<h4>Login</h4>
			<form onSubmit={onFormSubmit}>
				<div style={{ marginBottom: '5px' }}>
					<label htmlFor='name'>username: </label>
					<input value={user.name} onChange={onInputChange} type='text' id='name' name='name' />
				</div>
				<div style={{ marginBottom: '10px' }}>
					<label htmlFor='password'>password: </label>
					<input
						value={user.password}
						onChange={onInputChange}
						type='password'
						id='password'
						name='password'
					/>
				</div>
				<button>login</button>
			</form>
			<p>{errorMessage}</p>
		</>
	);
}
