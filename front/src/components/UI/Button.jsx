export default function Button(props) {
	return (
		<button
			className='mt-10 bg-light-blue hover:bg-dark-blue  text-light-gray font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
			type={props.type}
			onClick={props.onClick}
		>
			{props.name}
		</button>
	);
}
