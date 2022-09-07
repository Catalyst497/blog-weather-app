import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Weather from './Weather';
import Home from './Home';
import Fabrication from './Fabrication';
import Utilisation from './Utilisation';
import Solution from './Solution';

const Main = ({isDesktop, WeatherData}) => {
	return (
		
		<main className="bg-white container mx-auto -mt-[7rem] mb-[4rem] w-[90%] rounded-2xl pt-4 shadow-lg shadow-gray-300/10">
			{isDesktop && <Navbar />}{' '}
			<div className="text-black flex md:items-start md:flex-row flex-col-reverse justify-between mt-[2rem] p-4">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/fabrication' element={<Fabrication />} />
					<Route path='/utilisation' element={<Utilisation />} />
					<Route path='/solution' element={<Solution />} />
				</Routes>
				
				{typeof WeatherData.main != 'undefined' && (
					<Weather WeatherData={WeatherData} />
				)}
			</div>
			<footer className="py-4 bg-black text-white text-center w-full rounded-b-2xl">
				Copyright @2022
			</footer>
		</main>
	);
};

export default Main;
