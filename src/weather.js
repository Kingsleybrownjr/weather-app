import axios from "axios";

const weatherData = {
	apiKey: "bafc28f4dd90822c55ca879a9220fffe",
	cityName: "Houston",
	weatherMetric: "imperial",
};

const getWeather = async () => {
	const { apiKey, cityName, weatherMetric } = weatherData;

	const res = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${weatherMetric}&appid=${apiKey}`
	);

	return res.data;
};

const getData = () => getWeather();

export { getWeather, getData, weatherData };
