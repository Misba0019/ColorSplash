// Select the button and heading elements
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

// Generate a random RGB color string
const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// Change background color and update h1 text on button click
button.addEventListener('click', () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})
