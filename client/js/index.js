const navLinks = document.querySelectorAll('nav ul a');

// Create route func
const route = (e) => {
	e = e || window.event;
	e.preventDefault();
	navLinks.forEach((a) => a.classList.remove('active'));
	e.target.classList.add('active');
	window.history.pushState({}, '', e.target.href);
	handleLocation();
};

// Give global access to route func
window.route = route;

// Handling components render
const blogContainer = document.getElementById('main');
const routes = {
	'/': '../public/components/Accueil.html',
	'/Fabrication': '../public/components/Fabrication.html',
	'/Utilisation': '../public/components/Utilisation.html',
	'/Elimination': '../public/components/Elimination.html',
	'/Solution': '../public/components/Solution.html',
};
const handleLocation = async () => {
	const path = window.location.pathname;
	const route = routes[path] || routes[404];
	const html = await fetch(route, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
	}).then((data) => data.text());
	blogContainer.innerHTML = html;
};

window.onpopstate = handleLocation;
handleLocation();
navLinks.forEach((a) => {
	if (a.getAttribute('href') == location.pathname) a.classList.add('active');
});

// Handling the Weather API call
let lon;
let lat;

let city = document.querySelector('.city');
let country = document.querySelector('.country');
let weather = document.querySelector('.weather-main');
let description = document.querySelector('.description');
let temperature = document.querySelector('.temperature');
let sunrise = document.querySelector('.sunrise');
let sunset = document.querySelector('.sunset');
let icon = document.querySelector('.weather-icon');
let datee = document.querySelector('.dt');
const kelvin = 273;

window.addEventListener('load', () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position);
			lon = position.coords.longitude;
			lat = position.coords.latitude;

			// API ID
			const key = '0956453499f8b98e09e8251d23b62404';

			// API URL
			const base =
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
				`lon=${lon}&appid=${key}`;

			// Calling the API
			fetch(base)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log(data);
					city.textContent = data.name;
					country.textContent = data.sys.country;
					weather.textContent = data.weather[0].main;
					description.textContent = data.weather[0].description;
					temperature.textContent = Math.floor(data.main.temp - kelvin) + '°C';
					let icon1 = data.weather[0].icon;
					icon.setAttribute(
						'src',
						`https://openweathermap.org/img/w/${icon1}.png`
					);
					datee.innerHTML = `${moment().format(
						'dddd'
					)}, ${moment().format('LL')}`;
				});
		});
	}
});

// const btnElRef = document.getElementById("yo");

//     btnElRef.addEventListener("click", ()=>{
//         fetch("http://127.0.0.1:4200", {
//             method: 'GET', // *GET, POST, PUT, DELETE, etc.
//             mode: 'cors', // no-cors, *cors, same-origin
//             cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//             credentials: 'same-origin', // include, *same-origin, omit
//             })
//             .then( data => data.text())
//             .then( data => {
//                 console.log(data)
//                 const mainElRef = document.getElementById("main")
//                 mainElRef.innerHTML = data
//             })
//         }
//     )
