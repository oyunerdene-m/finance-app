export default function Form() {
	return (
		<>
			<h4>Login</h4>
			<form>
				<div style={{ marginBottom: '5px' }}>
					<label htmlFor='name'>username: </label>
					<input type='text' id='name' name='name' />
				</div>
				<div style={{ marginBottom: '10px' }}>
					<label htmlFor='password'>password: </label>
					<input type='password' id='password' name='password' />
				</div>
				<button>login</button>
			</form>
		</>
	);
}
