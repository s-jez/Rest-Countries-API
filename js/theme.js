const LIGHT_MODE = "white";
const DARK_MODE = "hsl(209, 23%, 22%)";

let isLight = true;

const BTN_THEME = document.querySelector(".button__theme");

const CARD_LIST = document.querySelector("ul");
const CARD_DESCRIPTION = document.querySelector("ul > li > a");

BTN_THEME.addEventListener("click", () => {
  console.log(CARD_DESCRIPTION);
  console.log(CARD_LIST);
  if (isLight) {
    if (CARD_LIST) {
      CARD_LIST.style.color = "white";
    }
    if (CARD_DESCRIPTION) {
      CARD_DESCRIPTION.style.color = "white";
    }
    document.body.style.backgroundColor = DARK_MODE;
    isLight = false;
  } else if (!isLight) {
    if (CARD_LIST) {
      CARD_LIST.style.color = "black";
    }
    document.body.style.backgroundColor = LIGHT_MODE;
    isLight = true;
  }
});
