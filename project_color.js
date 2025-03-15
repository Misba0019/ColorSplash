const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`; 
}

//Step 1: So, in here we made a seperate function that works for bringing random colors through rgb() and Math. methods 

//Step 2: Then we added that random color function to another function expression that is inside the Event Listener, 'click'
//We then put inside the function expression, to document to get the body element,
//inside the body element, we put style and then background-color will be updated to the randomColor function expression.
//And h1 element's innerText will be updated to the randomColor text
