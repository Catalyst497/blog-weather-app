import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
	// STATES
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
	const [NavOpen, setNavOpen] = useState(false);
	const [lat, setLat] = useState([]);
	const [long, setLong] = useState([]);
	const [WeatherData, setWeatherData] = useState([]);

	// Update page with screen size
	const updateMedia = () => {
		setIsDesktop(window.innerWidth > 768);
	};
	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	}, []);


	//Opening and closing Nav
	function navToggle() {
		setNavOpen(!NavOpen);
	}

	// Update Weather
	const API_URL = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
	useEffect(() => {
		const fetchWeatherData = async () => {
			navigator.geolocation.getCurrentPosition(function (position) {
				setLat(position.coords.latitude);
				setLong(position.coords.longitude);
			});

			await fetch(
				API_URL
			)
				.then((res) => res.json())
				.then((result) => {
					setWeatherData(result);
					console.log(WeatherData);
				});
		};
		fetchWeatherData();
	}, [lat, long]);

	return (
		<>
			<Header navOpen={NavOpen} navToggle={navToggle} isDesktop={isDesktop} />
			<Main WeatherData={WeatherData} isDesktop={isDesktop} />
		</>
	);
};

export default App;
