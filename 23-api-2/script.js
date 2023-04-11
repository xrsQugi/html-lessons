const countriesList = document.querySelector(".countries-list");
const input = document.querySelector(".get-countries-input");
const fetchCountries = "https://api.sampleapis.com/countries/countries";
const countriesSet = new Set();

window.addEventListener("load", ()=>{
    input.focus();
})

input.addEventListener("input", () => {
    countriesList.replaceChildren("");
    countriesSet.clear();
    getCountries(fetchCountries);
})


function getCountries(fetchApi) {
    return fetch(fetchApi)
        .then(data => data.json())
        .then(countries => renderCountries(countries))
        .catch(error => console.log(Error(error)))
}

function renderCountries(countries) {
    return countries.forEach(country => {
        let countryLower = country.name.toLowerCase();
        if (countryLower.includes(input.value.trim().toLowerCase()) && !countriesSet.has(country.name)){
            countriesSet.add(country.name);
            countriesList.insertAdjacentHTML("afterbegin", 
            `<li class = "country-info">
                <ul>
                    <li>${country.name}</li>
                    <li><img src = "${country.media.flag}"></li>
                    <li>Capital: ${country.capital}</li>
                    <li>Population: ${country.population}</li>
                    <li>Phone: +${country.phone}</li>
                    <li>Currency: ${country.currency}</li>
                    <li>Abbreviation: ${country.abbreviation}</li>
                </ul>
            </li>`);
        }
    });
}

