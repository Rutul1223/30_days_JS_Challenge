/* Activity -> 1 : Basic Event Handling */

// Task_1 - Add a click event listener to a button that changes the text content of a paragraph.

const button = document.getElementById('changeParagraph');
const newText = document.getElementById('paragraph');

button.addEventListener("click",()=>{
    newText.textContent = "This is the new Text Content";
});

// Task_2 - Add a double-click event listener to an image that toggles its visibility.

const Toggler = document.getElementById('toggleImage');

Toggler.addEventListener("dblclick",()=>{
    if (Toggler.style.display === "none") {
        Toggler.style.display = "block";
    } else {
        Toggler.style.display = "none";
    }
});

/* Activity -> 2 : Mouse Events */

// Task_3 - Add a mousehover event listener to an element that changes its background color.

const mousehover = document.getElementById('hoverElement');


mousehover.addEventListener("mouseover",()=>{
    mousehover.style.backgroundColor = 'red';
});
mousehover.addEventListener("mouseout",()=>{
    mousehover.style.backgroundColor = 'lightblue';
});

// Task_4 - Add a mouseout event listener to an element that resets its background color.

const resetElement = document.getElementById("resetElement");

resetElement.addEventListener("mouseout", () => {
  resetElement.style.backgroundColor = "lightcoral";
});
resetElement.addEventListener("mouseover", () => {
  resetElement.style.backgroundColor = "lightgreen";
});

/* Activity -> 3 : Keyboard Events */

// Task_5 - Add a keydown event listener to an input field that logs the key pressed to the console.

const inputField = document.getElementById("inputField");

inputField.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Task_6 - Add a keyup event listener to an input field that displays the current value in a paragraph.

const inputField1 = document.getElementById('inputField1');
const displayParagrapgh = document.getElementById('displayParagraph');

inputField1.addEventListener("keyup",()=>{
    displayParagrapgh.textContent = `Current Value: ${inputField1.value}`
});

/* Activity -> 4 : Form Events */

// Task_7 - Add a submit event listener to a form that prevents the difault submission and logs the form data to the console.

const form = document.getElementById('myForm');

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const forData = new FormData(form);

    for(const[name,value] of forData){
        console.log(`${name}:${value}`);
    }
});

// Task_8 - Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const selectDropdown = document.getElementById("mySelect");
const displayParagraph1 = document.getElementById("displayParagraph1");
selectDropdown.addEventListener("change", () => {
  displayParagraph1.textContent = `Selected value: ${selectDropdown.value}`;
});

/* Activity -> 5 : Event Delegation */

// Task_9 - Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.getElementById("myList");


list.addEventListener("click", (event) => {
  if (event.target && event.target.tagName === "LI") {
    console.log(`Clicked item: ${event.target.textContent}`);
  }
});

// Task_10 - Add an event listener to a parent element that listens for events from dynamically added child elements.

const parent = document.getElementById("parent");
const addButton = document.getElementById("addButton");


function handleButtonClick(event) {
  if (event.target && event.target.classList.contains("dynamic-button")) {
    console.log(`Clicked button: ${event.target.textContent}`);
  }
}
parent.addEventListener("click", handleButtonClick);
addButton.addEventListener("click", () => {
  const newButton = document.createElement("button");
  newButton.className = "dynamic-button";
  newButton.textContent = "New Button";
  parent.appendChild(newButton);
});



