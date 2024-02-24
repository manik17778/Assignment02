// Constants for query selector
const studentId = document.getElementById('studentId'); // Gets the element with id 'studentId'
const customNumberInput = document.getElementById('customNumber'); // Gets the element with id 'customNumber'
const customColorButton = document.querySelector('.customColor'); // Gets the element with class 'customColor'
const randomColorButton = document.querySelector('.randomColor'); // Gets the element with class 'randomColor'
const imageSelect = document.getElementById('imageSelect'); // Gets the element with id 'imageSelect'
const imageDisplay = document.getElementById('imageDisplay'); // Gets the element with id 'imageDisplay'

// Function to change background color from user input and add student id
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value); 
    studentId.textContent = "200553423"; // Sets the text content of studentId element
    document.body.style.backgroundColor = getColor(userInput); // Sets background color 
}

// Function to generate random color
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    studentId.textContent = "200553423"; // Sets the text content of studentId element
    document.body.style.backgroundColor = getColor(randomNum); // Sets background color of body based on random number
}

// Function to get color based on user input or random number
function getColor(num) {
    if (num < 0 || num > 100) return 'red'; // Returns red for out-of-range numbers
    if (num <= 20) return 'green'; // Returns green for numbers up to 20
    if (num <= 40) return 'blue'; // Returns blue for numbers up to 40
    if (num <= 60) return 'orange'; // Returns orange for numbers up to 60
    if (num <= 80) return 'purple'; // Returns purple for numbers up to 80
    if (num <= 100) return 'yellow'; // Returns yellow for numbers up to 100
}

// Function to generate options for select list
function generateImageOptions() {
    const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg']; // Array of image filenames
    for (let i = 0; i < images.length; i++) { // For loop
        const option = document.createElement('option'); // Create a new option element
        option.value = images[i]; // Set the value of the option to the image filename
        option.textContent = images[i]; // Set the text content of the option to the image filename
        imageSelect.appendChild(option); // Append the option to the imageSelect element
    }
}

// Function to change displayed image
function changeDisplayedImage() {
    const selectedImage = imageSelect.value; // Get the selected value from imageSelect
    if (selectedImage) { // If statement 
        imageDisplay.src = `img/${selectedImage}`; // image src attribute
    }
}

// Event listeners
customColorButton.addEventListener('click', changeCustomColor); // Adds click event listener to customColorButton
randomColorButton.addEventListener('click', changeRandomColor); // Adds click event listener to randomColorButton
imageSelect.addEventListener('change', changeDisplayedImage); // Adds change event listener to imageSelect

// Initialization
generateImageOptions(); // calling function to show image options
