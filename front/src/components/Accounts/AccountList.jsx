import Account from './Account';

export default function AccountList({accounts}){
    return (
    <ul>
        {accounts.map(account=> <Account account={account}/>)}
    </ul>
    )
    
}