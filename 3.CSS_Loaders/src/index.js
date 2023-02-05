import './index.css';
import _ from "lodash";
import "./clearButton";
import Icon from './icon1.jpeg';
// import Data from './data.xml';
// import Notes from './data.csv';

document.getElementById("button1").addEventListener("click", function() {
    const el = document.getElementById("header");
    el.innerHTML = "Hey I have updated the codedfdf!";

    const listItems = ["Apple", "orange", "Banana"];
    const ul = document.getElementById("shoppingList");
    _.forEach(listItems, function(item) {
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    })

    // add image to our existing div
    const myIcon = new Image();
    myIcon.src = Icon;

    console.log(Data)
    console.log(Notes)
    
    el.appendChild(myIcon);


})