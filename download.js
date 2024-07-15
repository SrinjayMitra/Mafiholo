function downloadImage() {
    const link = document.createElement('a');
    link.href = 'gameFlowchart.png';  // Replace with the actual path to your image
    link.download = 'Flowchart.png';  // Replace with the desired filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}