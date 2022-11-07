import classes from './Account.module.css';

export default function Account(props){
    const {name, type, amount, currency, description} = props.account
 return ( 
    <li className={classes.account}>
        <h4>{name} - {type}</h4>
        <p>balance: {currency}{amount} </p>
        <p>{description}</p>
    </li>
 )
}