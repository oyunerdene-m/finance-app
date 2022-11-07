import classes from './Account.module.css';

export default function Account(props){
    const {name, type, initialBalance, currency, bankName} = props.account
 return ( 
    <li className={classes.account}>
        <h4>{name}</h4>
        <p>balance: {initialBalance} {currency}</p>
        <p>{bankName} - {type}</p>
    </li>
 )
}