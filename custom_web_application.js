// custom_web_application.js

async function addTask() {
  // Your existing addTask function logic
}

async function fetchTasks() {
  // Your existing fetchTasks function logic
}

// Function to go back to the main page
function goBack() {
  window.location.href = '/';
}

// Fetch tasks on page load
document.addEventListener('DOMContentLoaded', fetchTasks);

// Set the color to #2e3fff
const color = '#2e3fff';

// Example: Update the color of an element with the class "your-element-class"
const element = document.querySelector('.your-element-class');
if (element) {
  element.style.color = color;
}

// Example: Update the background color of an element with the class "your-other-element-class"
const otherElement = document.querySelector('.your-other-element-class');
if (otherElement) {
  otherElement.style.backgroundColor = color;
}
