/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const divExcuse = document.querySelector("#excuse");

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let randomNumberForWho = Math.floor(Math.random() * who.length);
  let randomNumberForAction = Math.floor(Math.random() * action.length);
  let randomNumberForWhat = Math.floor(Math.random() * what.length);
  let randomNumberForWhen = Math.floor(Math.random() * when.length);

  let excuse = `${who[randomNumberForWho]} ${action[randomNumberForAction]} ${what[randomNumberForWhat]} ${when[randomNumberForWhen]}`;

  console.log(excuse);

  // let generateExcuse = document.createElement("h1");
  // generateExcuse.innerHTML = excuse;
  // divExcuse.appendChild(generateExcuse);

  let generateExcuse = document.createElement("h1");
  generateExcuse.innerHTML = excuse;
  divExcuse.appendChild(generateExcuse);

  function randomElement(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
  }
  let otraExcusa = document.createElement("h1");
  otraExcusa.innerHTML = `${randomElement(who)} ${randomElement(
    action
  )} ${randomElement(what)} ${randomElement(when)}`;
  divExcuse.appendChild(otraExcusa);
};
