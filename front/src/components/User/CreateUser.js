export default function Createuser() {
	return (
		<>
			<h4>Create Account</h4>
			<form>
				<div style={{ marginBottom: '5px' }}>
					<label htmlFor="username">username: </label>
					<input type="text" id="username" name="username" />
				</div>
				<div style={{ marginBottom: '10px' }}>
					<label htmlFor="username">password: </label>
					<input type="password" id="password" name="password" />
				</div>
				<button>create account</button>
			</form>
		</>
	);
}
