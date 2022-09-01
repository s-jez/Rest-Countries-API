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
  const aEl = document.createElement("a");
  liName.innerText = countries[0];

  aEl.appendChild(createFlagItem(countries));
  const divContainer = document.createElement("div");
  divContainer.appendChild(aEl);
  divContainer.appendChild(
    createInfoItem("Native Name", countries[0].nativeName)
  );
  divContainer.appendChild(
    createInfoItem("Population", countries[0].population)
  );
  divContainer.appendChild(createInfoItem("Region", countries[0].region));
  divContainer.appendChild(createInfoItem("Sub Region", countries[0].region));
  divContainer.appendChild(createInfoItem("Capital", countries[0].capital));
  divContainer.appendChild(
    createInfoItem("Top Level Domain", countries[0].tld)
  );
  divContainer.appendChild(
    createInfoItem("Currencies", countries[0].currency.CLP)
  );
  divContainer.appendChild(
    createInfoItem("Border Countries", countries[0].borderCountries)
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
