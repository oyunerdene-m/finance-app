type NoIdTransaction = {
  userId: number;
  fromAccountId: number;
  toAccountId: number;
  amount: number;
  type: 'income' | 'expense' | 'transfer';
  category: string;
  description: string;
};

type Transaction = NoIdTransaction & {
  id: number;
};

const transactions: Transaction[] = [];

function getTransactions(userId: number) {
  const userTransactions = transactions.filter((a) => a.userId === userId);
  return new Promise<Transaction[]>((resolve) => setTimeout(() => resolve([...userTransactions]), 100));
}

function addTransaction(userId: number, accountData: NoIdTransaction) {
  const newTransaction = {
    ...accountData,
    userId,
    id: 10000 * transactions.length + Math.floor(Math.random() * 10000),
  };

  transactions.push(newTransaction);

  return new Promise<Transaction>((resolve) => setTimeout(() => resolve(newTransaction), 100));
}

function editTransaction(userId: number, id: number, accountData: NoIdTransaction) {
  const idx = transactions.findIndex((a) => a.id === id);
  if (idx === -1) {
    throw new Error('Transaction not found');
  }

  if (transactions[idx].userId !== userId) {
    throw new Error('Transaction not found');
  }

  const updatedTransaction = {
    ...transactions[idx],
    ...accountData,
    amount: transactions[idx].amount,
  };

  transactions[idx] = updatedTransaction;

  return new Promise<Transaction>((resolve) => setTimeout(() => resolve(updatedTransaction), 100));
}

export { Transaction, getTransactions, addTransaction, editTransaction };
