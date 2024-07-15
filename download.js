function downloadImage() {
    const link = document.createElement('a');
    link.href = 'gameFlowchart.png';  // Replace with the actual path to your image
    link.download = 'Flowchart.png';  // Replace with the desired filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function toggleMore() {
    var moreMenu = document.getElementById("more-menu");
    if (moreMenu.style.display === "none" || moreMenu.style.display === "") {
        moreMenu.style.display = "block";
    } else {
        moreMenu.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("more-menu").style.display = "none";
});