document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-box img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            const modal = document.createElement("div");
            modal.style.position = "fixed";
            modal.style.top = "0";
            modal.style.left = "0";
            modal.style.width = "100%";
            modal.style.height = "100%";
            modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            modal.style.display = "flex";
            modal.style.alignItems = "center";
            modal.style.justifyContent = "center";
            modal.style.zIndex = "1000";

            const enlargedImg = document.createElement("img");
            enlargedImg.src = img.src;
            enlargedImg.style.maxWidth = "90%";
            enlargedImg.style.maxHeight = "90%";
            enlargedImg.style.borderRadius = "10px";
            enlargedImg.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.8)";

            modal.appendChild(enlargedImg);
            document.body.appendChild(modal);

            // Close the modal when clicked
            modal.addEventListener("click", function () {
                modal.remove();
            });
        });
    });
});
