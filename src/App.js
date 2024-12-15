import React, { useEffect, useState } from 'react';
import Header from './Header';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import UsersList from './components/UsersList';
import { Login } from './components/Login/login.jsx';
import Cookies from 'js-cookie';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
	const [users, setUsers] = useState([]);
	const cookieValue = Cookies.get('member-user');
	
//	if(!cookieValue)
	return (
		<div className='container'>
	        <Routes>
				<Route path="/" element={<Login/>} />
				<Route path="/list" element={<UsersList />} />
				<Route path="/about" element={<App />} />
				<Route path="/contact" element={<UsersList />} />
	        </Routes>
	      </div>
  	);
}

export default React.memo(App);
