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
  img.width = 160;
  img.height = 98;

  imgDivContainer.appendChild(img);

  return imgDivContainer;
};

const createCountryItem = (country) => {
  const li = document.createElement("li");

  const liName = document.createElement("span");
  liName.innerText = country.name;

  li.appendChild(createFlagItem(country));
  li.appendChild(liName);

  li.appendChild(createInfoItem("Population", country.population));
  li.appendChild(createInfoItem("Region", country.region));
  li.appendChild(createInfoItem("Capital", country.capital));

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
