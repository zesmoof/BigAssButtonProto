let originalContent = "Click me!";
let originalImage = "";

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function setContent() {
    const userContent = document.getElementById('userContent').value;
    const imageUpload = document.getElementById('imageUpload').files[0];

    // Update button text
    if (userContent) {
        originalContent = userContent;
        document.getElementById('surpriseButton').innerText = originalContent;
    }

    // Update image
    if (imageUpload) {
        const reader = new FileReader();
        reader.onload = function(e) {
            originalImage = e.target.result;
            displayContent();
        };
        reader.readAsDataURL(imageUpload);
    } else {
        displayContent();
    }

    document.getElementById('popup').style.display = 'none';
}

function clearContent() {
    document.getElementById('userContent').value = '';
    document.getElementById('imageUpload').value = '';
    originalContent = "Click me!";
    originalImage = "";
    document.getElementById('surpriseButton').innerText = originalContent;
    displayContent();
}

function displayContent() {
    const displayDiv = document.getElementById('displayContent');
    displayDiv.innerHTML = '';

    // Display text
    const contentText = document.createElement('p');
    contentText.innerText = originalContent;
    displayDiv.appendChild(contentText);

    // Display image if exists
    if (originalImage) {
        const contentImage = document.createElement('img');
        contentImage.src = originalImage;
        displayDiv.appendChild(contentImage);
    }
}

document.getElementById('surpriseButton').onclick = function() {
    alert(`Surprise! Your content is: "${originalContent}"`);
};
