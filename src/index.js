import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/style.css';
import App from './App';

// ReactDOM.render(
// 	<Router>
// 		<App />
// 	</Router>,
// 	document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<App />
	</Router>
	
);
