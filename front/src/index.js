import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AccountsContextProvider } from './context/accounts-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AccountsContextProvider>
		<App />
	</AccountsContextProvider>,
);
