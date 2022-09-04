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

const createListElement = (countries) => {
  const ul = document.querySelector("ul");
  countries.forEach((country) => {
    ul.appendChild(createCountryItem(country));
  });
  return ul;
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

const createDetailElement = (countries) => {
  const li = document.createElement("li");
  li.classList.add("card__details");
  const liName = document.createElement("span");
  const aEl = document.createElement("a");
  const divEl = document.createElement("div");
  divEl.classList.add("card__info");
  liName.innerText = countries[0];

  aEl.appendChild(createFlagItem(countries[0], 350, 250));
  li.appendChild(aEl);

  divEl.appendChild(createInfoItem("Native Name", countries[0].name));
  divEl.appendChild(createInfoItem("Population", countries[0].population));
  divEl.appendChild(createInfoItem("Region", countries[0].region));
  divEl.appendChild(createInfoItem("Sub Region", countries[0].region));
  divEl.appendChild(createInfoItem("Capital", countries[0].capital));
  divEl.appendChild(createInfoItem("Top Level Domain", countries[0].tld));
  divEl.appendChild(createInfoItem("Currencies", countries[0].currency.CLP));
  divEl.appendChild(
    createInfoItem("Border Countries", countries[0].borderCountries)
  );
  li.appendChild(divEl);

  return li;
};

const createButton = (text, href, className) => {
  const a = document.createElement("a");
  a.href = href;
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.classList.add(className);
  a.appendChild(btn);

  return a;
};

export const renderCountries = (countries) => {
  document.querySelector("ul").innerHTML = "";
  const rootEl = document.getElementById("root");
  rootEl.appendChild(createListElement(countries));
};

export const renderCountryDetails = (countries) => {
  document.querySelector("ul").innerHTML = "";
  const rootEl = document.getElementById("root");
  rootEl.prepend(createButton("Back", "/", "btn__back"));
  document.querySelector("ul").appendChild(createDetailElement(countries));
};
