const showMoreBtn = document.getElementById("showMoreBtn");

showMoreBtn.addEventListener("click", () => {

    const hiddenPhotos =
        document.querySelectorAll(".hidden-photo");

    hiddenPhotos.forEach(photo => {
        photo.style.display = "block";
    });

    showMoreBtn.style.display = "none";
});