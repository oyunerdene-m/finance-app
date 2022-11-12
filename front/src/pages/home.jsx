import {Link} from 'react-router-dom';

export default function Home(){
return (
    <>
        <h1>Finance App</h1>
        <Link to="/accounts">accounts</Link>
    </>
  )  
}