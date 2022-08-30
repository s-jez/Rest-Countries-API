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
  li.classList.add("card__country");

  const liName = document.createElement("span");
  liName.innerText = country.name;
  li.appendChild(createFlagItem(country));
  const divContainer = document.createElement("div");
  divContainer.classList.add("card__description");
  divContainer.appendChild(liName);

  divContainer.appendChild(createInfoItem("Population", country.population));
  divContainer.appendChild(createInfoItem("Region", country.region));
  divContainer.appendChild(createInfoItem("Capital", country.capital));

  li.appendChild(divContainer);

  return li;
};

const createListElement = (countries) => {
  const ul = document.querySelector("ul");
  countries.forEach((country) => {
    ul.appendChild(createCountryItem(country));
  });
  return ul;
};

export const renderCountries = (countries) => {
  document.querySelector("ul").innerHTML = "";
  const rootEl = document.getElementById("root");
  rootEl.appendChild(createListElement(countries));
  console.log(countries);
};
