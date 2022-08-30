import { renderCountries } from "./utils.js";

const API_URL_COUNTRY = "https://restcountries.com/v3.1/name/";
let countries;
let countryName = "";

const renderDetailsCountry = () => {
  fetch(`${API_URL_COUNTRY}/${countryName}`)
    .then((response) => response.json())
    .then(
      (data) =>
        (countries = data.map((country) => {
          return {
            flagsURL: country.flags.png,
            name: country.name.common,
            nativeName: country.nativeName,
            population: country.population.toLocaleString(),
            region: country.region,
            subregion: country.subregion,
            capital: country.capital ? country.capital[0] : undefined,
            tld: country.tld ? country.tld[0] : undefined,
            currency: country.currencies,
            languages: country.languages,
            borderCountries: country.borders,
          };
        }))
    )
    .then(() => renderCountries(countries));
};

export const renderDetails = () => {
  document.querySelector(".filters").classList.add("hidden");
  const searchParams = new URLSearchParams(window.location.search);
  countryName = searchParams.get("country");
  if (!countryName) {
    window.location.href = "/";
  } else {
    renderDetailsCountry();
  }
};
