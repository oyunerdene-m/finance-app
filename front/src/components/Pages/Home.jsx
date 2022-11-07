export default function Home({currentUser}) {
	return (
    <>
        <h1>Finance App</h1>
        <div>Hello, {currentUser.name} <a href="#.com">logout</a></div>
    </>)
    
}
