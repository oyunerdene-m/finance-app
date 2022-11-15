import express from 'express';

import { addAccount, deleteAccount, editAccount, getAccounts } from './accounts';

const router = express.Router();

router.use((req, res, next) => {
  if (!req.session.user) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  next();
});

router.get('/accounts', async (req, res, next) => {
  try {
    const accounts = await getAccounts(req.session.user!.id);
    res.json({ data: { accounts } });
  } catch (error) {
    next(error);
  }
});

router.post('/accounts/add', async (req, res, next) => {
  try {
    const newAccount = await addAccount(req.session.user!.id, req.body);
    res.json({ data: { account: newAccount } });
  } catch (error) {
    next(error);
  }
});

router.post('/accounts/edit/:id', async (req, res, next) => {
  try {
    const updatedAccount = await editAccount(req.session.user!.id, parseInt(req.params.id), req.body);
    res.json({ data: { account: updatedAccount } });
  } catch (error) {
    next(error);
  }
});

router.post('/accounts/delete/:id', async (req, res, next) => {
  try {
    await deleteAccount(req.session.user!.id, parseInt(req.params.id));
    res.json({ data: { done: true } });
  } catch (error) {
    next(error);
  }
});

export default router;
