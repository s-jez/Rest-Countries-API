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

const createFlagItem = (country, width, height) => {
  const imgDivContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = country.flagsURL;
  img.width = width;
  img.height = height;

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
  aEl.appendChild(createFlagItem(country, 250, 156));
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
  li.classList.add("card__details");
  const liName = document.createElement("span");
  const aEl = document.createElement("a");
  liName.innerText = countries[0];

  aEl.appendChild(createFlagItem(countries[0], 550, 356));
  li.appendChild(aEl);
  // li.appendChild(imageContainer);
  // li.appendChild(createInfoItem("Native Name", countries[0].name));
  // li.appendChild(createInfoItem("Population", countries[0].population));
  // li.appendChild(createInfoItem("Region", countries[0].region));
  // li.appendChild(createInfoItem("Sub Region", countries[0].region));
  // li.appendChild(createInfoItem("Capital", countries[0].capital));
  // li.appendChild(createInfoItem("Top Level Domain", countries[0].tld));
  // li.appendChild(createInfoItem("Currencies", countries[0].currency.CLP));
  // li.appendChild(
  //   createInfoItem("Border Countries", countries[0].borderCountries)
  // );

  return li;
};
const createDetailDescription = () => {
  li.appendChild(createListElement(label, value));
};

export const renderCountries = (countries) => {
  document.querySelector("ul").innerHTML = "";
  const ul = document.querySelector("ul");
  ul.appendChild(createListElement(countries));
  console.log(countries);
};
export const renderCountryDetails = (countries) => {
  document.querySelector("ul").innerHTML = "";
  const ul = document.querySelector("ul");
  ul.appendChild(createDetailElement(countries));
  console.log(countries);
};
