const renderNavBar = () => {
	const navDiv = document.querySelector("#nav");
	const nav = document.createElement("nav");
	nav.classList.add("main-nav");

	nav.innerHTML = `
	<div class="main-nav__container">
		<div class="main-nav__items">
			<div class="main-nav__logo">
				<p>Weather App</p>
				<i class="fas fa-sun"></i>
			</div>

			<form class="form-input">
				<input
					type="text"
					class="search-city__input"
					placeholder="Enter a City"
				/>
				<button class="search-city__button">Search</button>
			</form>

			<button class="search-city-metric__button"><span class='celcius'>C°</span> / <span class='farenheit selected'>°F</span></button>
		</div>
	</div>
    `;
	navDiv.appendChild(nav);
};

export { renderNavBar };
