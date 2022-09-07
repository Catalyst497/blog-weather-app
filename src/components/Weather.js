export default ({ WeatherData }) => {
	return (
		<aside className=" bg-gray-200 basis-[20%] rounded-lg p-4">
			{/* City and Country */}
			<div className="font-bellefair">
				{WeatherData.name}, {WeatherData.sys.country}
			</div>

			{/* Actual Weather Details */}
			<div className="flex">
				{/* Weather Icon */}
				<img
					src={`http://openweathermap.org/img/w/${WeatherData.weather[0].icon}.png`}
					alt="weather-icon"
				/>
				<div>
					<h1 className="text-[1.5rem] text-black capitalize">
						{WeatherData.weather[0].main}
					</h1>
					<p className="text-[14px] text-gray-800">
						{WeatherData.weather[0].description}
					</p>
				</div>
			</div>
			<div></div>
			<div className="py-4 text-[14px]">
				<div>Temprature: {WeatherData.main.temp} &deg;C</div>
				<div>Sunrise: {new Date(WeatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</div>
				<div>
					Sunset: {new Date(WeatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}
				</div>
			</div>
		</aside>
	);
};
