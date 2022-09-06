const LIGHT_MODE = "white";

const DARK_MODE = "hsl(207, 26%, 17%)";
const DARK_MODE_CARD = "hsl(209, 23%, 22%)";

export let isLight = true;

const BTN_THEME = document.querySelector(".button__theme");

BTN_THEME.addEventListener("click", () => {
  const CARD_LIST = document.querySelector("ul");
  const CARD_LI = document.querySelectorAll("ul li");
  const CARD_DESC = document.querySelectorAll("li a div:nth-child(2)");
  console.log(CARD_LIST);
  console.log(CARD_LI);
  console.log(CARD_DESC);
  if (isLight) {
    if (CARD_LIST) {
      CARD_LIST.style.color = "white";
    }
    CARD_LI.forEach((card) => {
      card.style.backgroundColor = DARK_MODE_CARD;
    });
    CARD_DESC.forEach((description) => {
      description.style.color = "white";
    });
    document.body.style.backgroundColor = DARK_MODE;
    isLight = false;
  } else if (!isLight) {
    if (CARD_LIST) {
      CARD_LIST.style.color = "black";
    }
    CARD_LI.forEach((card) => {
      card.style.backgroundColor = LIGHT_MODE;
    });
    CARD_DESC.forEach((description) => {
      description.style.color = "black";
    });
    document.body.style.backgroundColor = LIGHT_MODE;
    isLight = true;
  }
});
