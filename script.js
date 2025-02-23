// Get modal elements
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("fullImage");
var captionText = document.getElementById("caption");
var closeBtn = document.getElementsByClassName("close")[0];

// Select all images with class 'enlarge-image'
var images = document.querySelectorAll(".enlarge-image");

images.forEach(img => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.getAttribute("data-caption");
    };
});

// Close the modal when the close button is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Close modal when clicking outside the image
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
