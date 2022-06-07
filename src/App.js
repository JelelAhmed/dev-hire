
import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Favorites from './routes/favorites/favorite.component';

import './App.styles.scss';


const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='favorites' element={<Favorites />} />
				</Route>
			</Routes>
		</div>

	)
}

export default App;
