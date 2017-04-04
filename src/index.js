import * as emoji from "./emoji.js";

var container = document.getElementById("app");
container.innerText = emoji.format(container.innerText);

