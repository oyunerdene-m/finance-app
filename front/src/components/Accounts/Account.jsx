export default function Account(props){
    console.log(props)
    const {name, type, initialBalance, currency, bankName} = props.account
 return ( 
    <li>
        <h4>{name}</h4>
        <p>balance: {initialBalance} {currency}</p>
        <p>{bankName} - {type}</p>
    </li>
 )
}