import { renderCountries } from "./utils.js";

const API_URL_ALL = "https://restcountries.com/v3.1/all";
const API_URL_NAME = "https://restcountries.com/v3.1/name";
const API_URL_REGION = "https://restcountries.com/v3.1/region";

const INPUT_FILTER = document.querySelector(".filters__input");
const INPUT_DROPDOWN = document.querySelector(".filters__dropdown");

let countriesData = [];
let query = "";

const renderAllCountries = () => {
  fetch(API_URL_ALL)
    .then((response) => response.json())
    .then(
      (data) =>
        (countriesData = data.map((country) => {
          return {
            flagsURL: country.flags.png,
            name: country.name.common,
            nativeName: country.nativeName,
            population: country.population,
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
    .then(() => renderCountries(countriesData));
};
renderAllCountries();

INPUT_FILTER.addEventListener("change", (ev) => {
  let queryValue = ev.target.value.toLowerCase().trim();
  if (queryValue != "") {
    countriesData = [];
    fetch(`${API_URL_NAME}/${queryValue}`)
      .then((response) => response.json())
      .then(
        (country) =>
          (countriesData = country.map((country) => {
            return {
              flagsURL: country.flags.png,
              name: country.name.common,
              nativeName: country.nativeName,
              population: country.population,
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
      .then(() => renderCountries(countriesData));
  } else {
    renderAllCountries();
  }
});
INPUT_DROPDOWN.addEventListener("change", (ev) => {
  let queryValue = ev.target.value.toLowerCase().trim();
  if (queryValue != "") {
    countriesData = [];
    fetch(`${API_URL_REGION}/${queryValue}`)
      .then((response) => response.json())
      .then(
        (country) =>
          (countriesData = country.map((country) => {
            return {
              flagsURL: country.flags.png,
              name: country.name.common,
              nativeName: country.nativeName,
              population: country.population,
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
      .then(() => renderCountries(countriesData));
  } else {
    renderAllCountries();
  }
});
