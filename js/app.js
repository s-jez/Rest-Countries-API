import { renderDashboard } from "./dasboard.js";
import { renderDetails } from "./details.js";

// Routing in search params
if (window.location.search.includes("?country=")) {
  renderDetails();
} else {
  renderDashboard();
}
