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
  