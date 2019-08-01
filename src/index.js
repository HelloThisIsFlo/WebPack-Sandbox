import "./styles.scss";

const app = document.getElementById("app");

function main() {
  addDebugElement();
}

function addDebugElement() {
  const debug = document.createElement("div");
  debug.id = "debug";
  app.appendChild(debug);
}


main();
