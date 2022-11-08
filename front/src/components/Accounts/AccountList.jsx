import Account from './Account';

export default function AccountList({accounts, onEditing}){
    return (
    <ul style={{display:'flex', justifyContent:'center'}}>
        {accounts.map(account=> <Account account={account} key={account.id} onEditing={onEditing} />)}
    </ul>
    )
    
}