import { renderCountries } from "./utils.js";

const API_URL_ALL = "https://restcountries.com/v3.1/all";

let countriesData = [];

fetch(API_URL_ALL)
  .then((response) => response.json())
  .then(
    (data) =>
      (countriesData = data.map((item) => {
        return {
          flagsURL: item.flags.png,
          name: item.name.common,
          population: item.population,
          region: item.region,
          capital: item.capital ? item.capital[0] : undefined,
        };
      }))
  )
  .then(() => renderCountries(countriesData));
