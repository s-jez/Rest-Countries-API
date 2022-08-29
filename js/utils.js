const createCountryItem = (country) => {
  const li = document.createElement("li");
  li.innerText = country.name;
  return li;
};

const createListElement = (countries) => {
  const ul = document.createElement("ul");
  countries.forEach((country) => {
    ul.appendChild(createCountryItem(country));
  });
  return ul;
};

export const renderCountries = (countries) => {
  const rootEl = document.getElementById("root");
  rootEl.appendChild(createListElement(countries));
  console.log(countries);
};
