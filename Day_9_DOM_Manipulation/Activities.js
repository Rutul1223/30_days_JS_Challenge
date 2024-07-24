/* Activity -> 1 : Selecting and Manipulating Elements */

// Task_1 - Select an HTML element by its ID and change its next content.

const changeContent = () => {
    const titleElement = document.getElementById('tittle');
    const Description = document.getElementById('discription');

    titleElement.textContent = 'New Tittle';
    Description.textContent = "This is the New description";
};

// Task_2 - Select an HTML element by its class and change its background color.

const changeBackground = () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'yellow';
    })
};

/* Activity -> 2 : Creating and Appending Elements */

// Task_3 - Create a new 'div' element with some text content and append it to the body.

const newDiv = document.createElement('div');
newDiv.textContent = "This is the new div element appending to the body using create method from js";
newDiv.style.backgroundColor = 'red';
newDiv.style.padding = '10px';
newDiv.style.margin = '10px';
newDiv.style.border = '1px solid';

document.body.appendChild(newDiv);

// Task_4 - Create a new 'li' element and add it to an existing 'ul' list.

const addListItem = document.createElement('li');
addListItem.textContent = "this is the new item created using script";
const newLi = document.querySelector('#myList');
// if(newLi){
newLi.appendChild(addListItem);
// }else{
//     console.log('no <ul> element found');
// }


/* Activity -> 3 : Removing Elements */

// Task_5 - Select an HTML element and remove it from the DOM.

const removeElement = () => {
    const elementToRemove = document.querySelector('.box');
    elementToRemove.remove();
}

// Task_6 - Remove the last child of a specific HTML element.

const removeLastChild = () => {
    const parentElement = document.querySelector('#myList');
    if (parentElement) {
        const lastChild = parentElement.lastElementChild;
        if (lastChild) {
            lastChild.remove();
        } else {
            console.log('no last element exist');
        }
    }else{
        console.log('no parent element found');
    }

}

/* Activity -> 4 : Modifying Attributes and Classes */

// Task_7 - Select an HTML element and change one of it's attributes (e.g., 'src' of an 'img' tag).

const imgChanger = () =>{
    const img = document.querySelector('#image');
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbLpnh5bQFY2GS07CWINqS0rNwoIKHHVEdg&s'
};

// Task_8 - Add and remove a CSS class to/from an HTML element.

const addHighlight = () => {
    const divElement = document.getElementById('Mydiv');
    divElement.classList.add('highlight');
};
const removeHighlight = ()=>{
    const Remove = document.getElementById('Mydiv');
    Remove.classList.remove('highlight');
};

/* Activity -> 5 : Event Handling */

// Task_9 - Add a click event listener to a button that changes the text content of a paragraph.

const changeText = () => {
    const newText = document.getElementById('myParagraph');
    newText.textContent = "this is my new paragraph";
};

//function to set up the event listener
const setupEventListener = () => {
    const newText = document.getElementById('changeTextButton');
    newText.addEventListener('click',myParagraph);
};
setupEventListener();

// Task_10 - Add a mousehover event listener to an element that changes its border color.
const handleMouseOver = (event) => {
    event.target.style.borderColor = 'red';
};
const handleMouseOut = (event) => {
    event.target.style.borderColor = 'black';
};
const setupHoverEffects = () => {
    const divElement = document.getElementById('hoverDiv');
    if (divElement) {
        divElement.addEventListener('mouseover', handleMouseOver);
        divElement.addEventListener('mouseout', handleMouseOut);
    } else {
        console.log('No div element found.');
    }
};
setupHoverEffects();