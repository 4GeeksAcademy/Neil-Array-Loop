import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let first = ["Dog", "Cat", "Bird", "Rat", "Fish"];
  let second = ["Grass", "Dirt", "Water", "Mud", "Rocks"];
  let third = [".com", ".org", ".to", ".net", ".co"]


  for (let i = 0; i < first.length; i++) {
    for (let z = 0; z < second.length; z++) {
      for (let y = 0; y < third.length; y++) {
        console.log(first[i], second[z], third[y])
      }
    }
  }
};
