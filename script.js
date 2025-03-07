document.addEventListener("DOMContentLoaded", function() {
    drawWave();
});

// Conversion en coudées royales (1 coudée ≈ 0.5236 m)
function convertCoudée() {
    let input = document.getElementById("inputValue").value;
    let result = input / 0.5236;
    document.getElementById("resultConversion").innerText = `Valeur en coudées royales: ${result.toFixed(5)}`;
}

// Affichage d'une onde sur un canvas
function drawWave() {
    let canvas = document.getElementById("waveCanvas");
    let ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 200;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    
    for (let x = 0; x < canvas.width; x++) {
        let y = canvas.height / 2 + 50 * Math.sin((x / canvas.width) * 2 * Math.PI * 5);
        ctx.lineTo(x, y);
    }
    
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();
}
