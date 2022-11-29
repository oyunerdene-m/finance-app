export default function Form({ formType, onInputChange, onFormSubmit }) {
	return (
		<>
			<h4>{formType}</h4>
			<form onSubmit={onFormSubmit}>
				{formType === 'Signup' && (
					<div style={{ marginBottom: '5px' }}>
						<label htmlFor='name'>username: </label>
						<input onChange={onInputChange} type='text' id='name' name='name' />
					</div>
				)}
				<div style={{ marginBottom: '5px' }}>
					<label htmlFor='email'>email: </label>
					<input onChange={onInputChange} type='text' id='email' name='email' />
				</div>
				<div style={{ marginBottom: '10px' }}>
					<label htmlFor='password'>password: </label>
					<input onChange={onInputChange} type='password' id='password' name='password' />
				</div>
				<button>{formType}</button>
			</form>
		</>
	);
}
