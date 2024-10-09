let originalContent = "Click me!"; // Default button text
let originalImage = ""; // Variable to hold uploaded image

// Function to show the popup
function showPopup() {
    document.getElementById('popup').style.display = 'block'; // Display the popup
}

// Function to set content from user input
function setContent() {
    const userContent = document.getElementById('userContent').value; // Get user input
    const imageUpload = document.getElementById('imageUpload').files[0]; // Get uploaded file

    // Update button text if user entered content
    if (userContent) {
        originalContent = userContent; // Set the new button text
        document.getElementById('surpriseButton').innerText = originalContent; // Update button display
    }

    // Update image if an image was uploaded
    if (imageUpload) {
        const reader = new FileReader(); // Create a FileReader to read the image
        reader.onload = function(e) {
            originalImage = e.target.result; // Get the image data URL
            displayContent(); // Call function to display content
        };
        reader.readAsDataURL(imageUpload); // Read the file as a data URL
    } else {
        displayContent(); // Call function to display content without image
    }

    document.getElementById('popup').style.display = 'none'; // Hide the popup
}

// Function to clear content
function clearContent() {
    document.getElementById('userContent').value = ''; // Clear the textarea
    document.getElementById('imageUpload').value = ''; // Clear the file input
    originalContent = "Click me!"; // Reset to default text
    originalImage = ""; // Clear the image
    document.getElementById('surpriseButton').innerText = originalContent; // Update button text
    displayContent(); // Call function to update displayed content
}

// Function to display the current content and image
function displayContent() {
    const displayDiv = document.getElementById('displayContent'); // Get display area
    displayDiv.innerHTML = ''; // Clear previous content

    // Create and display text
    const contentText = document.createElement('p'); // Create a new paragraph element
    contentText.innerText = originalContent; // Set the text
    displayDiv.appendChild(contentText); // Add text to the display area

    // If there's an uploaded image, display it
    if (originalImage) {
        const contentImage = document.createElement('img'); // Create an image element
        contentImage.src = originalImage; // Set the source to the uploaded image
        displayDiv.appendChild(contentImage); // Add image to the display area
    }
}

// Function for button click to show an alert with the content
document.getElementById('surpriseButton').onclick = function() {
    alert(`Surprise! Your content is: "${originalContent}"`); // Show alert with current button text
};
