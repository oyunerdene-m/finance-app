type NoIdAccount = {
  userId: number;
  amount: number;
  type: 'savings' | 'cash' | 'loan' | 'credit' | 'daily';
  currency: '€' | '$' | '₮';
  name: string;
  description: string;
};

type Account = NoIdAccount & {
  id: number;
};

const accounts: Account[] = [];

function getAccounts(userId: number) {
  const userAccounts = accounts.filter((a) => a.userId === userId);
  return new Promise<Account[]>((resolve) => setTimeout(() => resolve([...userAccounts]), 100));
}

function addAccount(userId: number, accountData: NoIdAccount) {
  const newAccount = {
    ...accountData,
    userId,
    id: 10000 * accounts.length + Math.floor(Math.random() * 10000),
  };

  accounts.push(newAccount);

  return new Promise<Account>((resolve) => setTimeout(() => resolve(newAccount), 100));
}

function editAccount(userId: number, id: number, accountData: NoIdAccount) {
  const accountIndex = accounts.findIndex((a) => a.id === id);
  if (accountIndex === -1) {
    throw new Error('Account not found');
  }

  if (accounts[accountIndex].userId !== userId) {
    throw new Error('Account not found');
  }

  const updatedAccount = {
    ...accounts[accountIndex],
    ...accountData,
  };

  accounts[accountIndex] = updatedAccount;

  return new Promise<Account>((resolve) => setTimeout(() => resolve(updatedAccount), 100));
}

function deleteAccount(userId: number, id: number) {
  const accountIndex = accounts.findIndex((a) => a.id === id);
  if (accountIndex === -1) {
    throw new Error('Account not found');
  }

  if (accounts[accountIndex].userId !== userId) {
    throw new Error('Account not found');
  }

  accounts.splice(accountIndex, 1);

  return new Promise<void>((resolve) => setTimeout(() => resolve(), 100));
}

export { Account, getAccounts, addAccount, editAccount, deleteAccount };
