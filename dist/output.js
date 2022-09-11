console.log('JS IS CONNECTED');
const mobileNav = document.querySelector('.mobile-nav_');
// const mobileToggler = docuemt.querySelector('.mobile.toggle')
const toggleNav = () => {
	mobileNav.classList.toggle('hidden');
};

// Configuring Weather
let lon;
let lat;

let city = document.querySelector('.city_');
let country = document.querySelector('.country_');
let weather = document.querySelector('.weather-main_');
let description = document.querySelector('.description_');
let temperature = document.querySelector('.temperature_');
let sunrise = document.querySelector('.sunrise_');
let sunset = document.querySelector('.sunset_');
let icon = document.querySelector('.weather-icon_');
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
					sunrise.textContent = new Date(
						data.sys.sunrise * 1000
					).toLocaleTimeString('en-IN');
					sunset.textContent = new Date(
						data.sys.sunset * 1000
					).toLocaleTimeString('en-IN');
					let icon1 = data.weather[0].icon;
					icon.setAttribute(
						'src',
						`https://openweathermap.org/img/w/${icon1}.png`
					);
					// icon.innerHTML = `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
				});
		});
	}
});

//// Implementing the single-pageness of the blog posts
const active = 'text-amber-700';
const blogs = document.querySelectorAll('main.Blog');
const items = document.querySelectorAll('ul > a');

const page = location.href.replace(`${location.origin}/`, '');
items.forEach((item) => item.classList.remove(active));
items.forEach((item) => {
	const itemLink = item.getAttribute('href').replace(`${location.origin}/`, '');
	if (itemLink == page || itemLink == 'home') {
		item.classList.add(active);
	}
});

function changeWithoutReload(cls) {
	const point = cls.href.replace(`${location.origin}/`, '');
	
	blogs.forEach((blog) => blog.classList.add('hidden'));
	if(point === '') {
		document.querySelector('main.Blog.home').classList.remove('hidden');
	}else {
		blogs.forEach((blog) => {
			if (blog.classList.contains(point)) {
				blog.classList.remove('hidden');
			}
		});
	}
	
}
changeWithoutReload(location);
// On Nav link clicks
const navCall = (e) => {
	e = e || window.event;
	e.preventDefault();
	window.history.pushState({}, '', e.target.href);
	items
		.forEach((a) => a.classList.remove(active));
	e.target.classList.add(active);
	changeWithoutReload(e.target);
};
// Check page pathname to decide what blog to show
// let currentPage = location.pathname;

// listen for changes
// setInterval(function () {
// 	if (currentPage != location.pathname) {
// 		currentPage = location.pathname;
// 		blogs.forEach((blog) => blog.classList.add('.hidden'));
// 		blogs.forEach((blog) => {
// 			blog.classList.contains(
// 				currentPage.split('/src/index.html/').pop()
// 					? currentPage.split('/src/index.html/').pop()
// 					: currentPage.slice(1)
// 			) && blog.classList.remove('.hidden');
// 		});
// 	}
// }, 500);
