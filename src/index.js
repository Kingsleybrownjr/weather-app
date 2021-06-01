import { renderNavBar } from './navBar';
import { renderShowcase } from './showcase';
import { weatherData } from './weather';

renderNavBar();
renderShowcase();

const form = document.querySelector('.form-input');
const searchInput = document.querySelector('.search-city__input');
const rootDiv = document.querySelector('#root');
const weatherButton = document.querySelector('.search-city-metric__button');
const celciusSpan = document.querySelector('.celcius');
const farenheitSpan = document.querySelector('.farenheit');

form.addEventListener('submit', e => {
	e.preventDefault();
	rootDiv.innerHTML = '';
	weatherData.cityName = searchInput.value;
	searchInput.value = '';
	renderShowcase();
});

weatherButton.addEventListener('click', e => {
	if (weatherData.weatherMetric === 'imperial') {
		rootDiv.innerHTML = '';
		weatherData.weatherMetric = 'metric';
		farenheitSpan.classList.remove('selected');
		celciusSpan.classList.add('selected');
		renderShowcase();
	} else if (weatherData.weatherMetric === 'metric') {
		rootDiv.innerHTML = '';
		weatherData.weatherMetric = 'imperial';
		celciusSpan.classList.remove('selected');
		farenheitSpan.classList.add('selected');
		renderShowcase();
	}
});
