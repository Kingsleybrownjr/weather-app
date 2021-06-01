import { getData } from './weather';
import { renderFooter } from './footer';

const renderShowcase = async () => {
	const rootDiv = document.querySelector('#root');
	const mainDiv = document.createElement('div');

	const data = await getData();
	const weatherCondition = data.weather.map(data => data.main);
	const weatherDescription = data.weather.map(data => data.description);

	createImageStyle(mainDiv, weatherCondition);

	const { name, sys, main } = data;

	mainDiv.innerHTML = `
	<main class='showcase'>
		<div class="showcase-container">
			<div class="showcase-weather__main">
				<h1 class="showcase-city__name">${name}, ${sys.country}</h1>
				<p class="showcase-weather__condition">${weatherCondition[0]}</p>
				<p class="showcase-weather__current">${Math.round(main.temp)}°</p>
			</div>
			<div class="showcase-weather__high-low">
				<p class="show-case__high-weather">H: ${Math.round(main.temp_max)}°</p>
				<p class="showcase__low-weather">L: ${Math.round(main.temp_min)}°</p>
			</div>
		</div>
		<p class="show-case__summary">
        	With a sky condition of ${weatherDescription}, the temperature feels like ${Math.round(
		main.feels_like
	)}°, with a humidty of ${main.humidity}!
		</p>
	</main>
    `;
	renderFooter();
	rootDiv.appendChild(mainDiv);
};

const createImageStyle = (mainDiv, weatherCondition) => {
	const images = renderBackgroundImage(weatherCondition);
	mainDiv.style.background = `url(${images})`;
	mainDiv.style.backgroundSize = 'cover';
	mainDiv.style.backgroundPosition = 'center';
	mainDiv.style.backgroundRepeat = 'no-repeat';
};

const renderBackgroundImage = weatherCondition => {
	const [weather] = weatherCondition;

	let images = './images/clouds.jpg';
	if (weather === 'Clear') {
		images = './images/clearskys.jpg';
	} else if (weather === 'Clouds') {
		images = './images/clouds.jpg';
	} else if (weather === 'Rain') {
		images = './images/rain3.jpg';
	}
	return images;
};

export { renderShowcase };
