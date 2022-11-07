import Account from './Account';

export default function AccountList({accounts}){
    return (
    <ul style={{display:'flex', justifyContent:'center'}}>
        {accounts.map(account=> <Account account={account} key={account.id}/>)}
    </ul>
    )
    
}