document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    window.openModal = function(element) {
        modal.style.display = "block";
        modalImg.src = element.src;
        captionText.innerHTML = element.nextElementSibling.innerHTML + " - " + element.nextElementSibling.nextElementSibling.innerHTML;
    }

    window.closeModal = function() {
        modal.style.display = "none";
    }
});