const renderFooter = () => {
	const roodDiv = document.querySelector("#root");
	const footer = document.createElement("footer");
    footer.classList.add('footer')
	footer.innerHTML = `
        <p>Todays weather is brought to you by <a href='https://openweathermap.org/'>Weather API</a> </p>
    `;

	roodDiv.appendChild(footer);
};
export { renderFooter };
