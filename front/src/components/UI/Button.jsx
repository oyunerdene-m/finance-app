export default function Button(props) {
	return (
		<button
			className='text-sm mt-5 bg-light-blue hover:bg-dark-blue text-light-gray font-bold py-1.5 px-3.5 rounded focus:outline-none focus:shadow-outline'
			type={props.type}
			onClick={props.onClick}
		>
			{props.name}
		</button>
	);
}
