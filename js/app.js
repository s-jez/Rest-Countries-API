import { renderDashboard } from "./dasboard.js";

// Routing in search params
if (window.location.search.includes("?country=")) {
  console.log("render details page!");
} else {
  renderDashboard();
}
