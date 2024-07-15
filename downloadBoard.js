function downloadImageBoard() {
    const link = document.createElement('a');
    link.href = 'BoardGame.png';  // Replace with the actual path to your image
    link.download = 'BoardGame.png';  // Replace with the desired filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}