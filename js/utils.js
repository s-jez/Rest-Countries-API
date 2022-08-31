const createInfoItem = (labelName, value) => {
  const infoEl = document.createElement("div");

  const labelEl = document.createElement("strong");
  labelEl.innerText = labelName + ": ";

  const valueEl = document.createElement("span");
  valueEl.innerText = value;

  infoEl.appendChild(labelEl);
  infoEl.appendChild(valueEl);

  return infoEl;
};

const createFlagItem = (country) => {
  const imgDivContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = country.flagsURL;
  img.width = 250;
  img.height = 156;

  imgDivContainer.appendChild(img);

  return imgDivContainer;
};

const createCountryItem = (country) => {
  const li = document.createElement("li");

  const aEl = document.createElement("a");
  aEl.href = `?country=${country.name}`;

  li.classList.add("card__country");

  const liName = document.createElement("span");
  liName.innerText = country.name;
  aEl.appendChild(createFlagItem(country));
  const divContainer = document.createElement("div");
  divContainer.classList.add("card__description");
  divContainer.appendChild(liName);

  divContainer.appendChild(createInfoItem("Population", country.population));
  divContainer.appendChild(createInfoItem("Region", country.region));
  divContainer.appendChild(createInfoItem("Capital", country.capital));

  aEl.appendChild(divContainer);
  li.appendChild(aEl);

  return li;
};

const createListElement = (countries) => {
  const ul = document.querySelector("ul");
  countries.forEach((country) => {
    ul.appendChild(createCountryItem(country));
  });
  return ul;
};
const createDetailElement = (countries) => {
  const li = document.createElement("li");
  const liName = document.createElement("span");
  liName.innerText = countries;

  const divContainer = document.createElement("div");
  divContainer.appendChild(liName);

  divContainer.appendChild(createInfoItem("Native Name", countries.nativeName));
  divContainer.appendChild(createInfoItem("Population", countries.population));
  divContainer.appendChild(createInfoItem("Region", countries.region));
  divContainer.appendChild(createInfoItem("Sub Region", countries.region));
  divContainer.appendChild(createInfoItem("Capital", countries.capital));
  divContainer.appendChild(createInfoItem("Top Level Domain", countries.tld));
  divContainer.appendChild(createInfoItem("Currencies", countries.borders));
  divContainer.appendChild(
    createInfoItem("Border Countries", countries.languages)
  );

  li.appendChild(divContainer);

  return li;
};

export const renderCountries = (countries) => {
  document.querySelector("ul").innerHTML = "";
  const rootEl = document.getElementById("root");
  rootEl.appendChild(createListElement(countries));
  console.log(countries);
};
export const renderCountryDetails = (countries) => {
  const rootEl = document.getElementById("root");
  rootEl.appendChild(createDetailElement(countries));
  console.log(countries);
};
