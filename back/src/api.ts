import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  if (!req.session.user) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  next();
});

router.get('/accounts', (req, res) => {
  res.json({ message: 'accounts list' });
});

router.post('/accounts/add', (req, res) => {
  res.json({ message: 'adding account' });
});

router.post('/accounts/edit/:id', (req, res) => {
  res.json({ message: 'editing account' });
});

router.post('/accounts/delete/:id', (req, res) => {
  res.json({ message: 'deleting account' });
});

export default router;
