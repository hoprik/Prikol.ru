const canvas = document.getElementById("canvasPaint")
const sizeCanvas = [960, 540]
canvas.height = window.innerHeight
canvas.width = window.innerWidth
const ctx = canvas.getContext("2d")
let prevX = null
let prevY = null
ctx.lineWidth = 5
let isDraw = false;
canvas.addEventListener("mousemove", (e) => {
    if (isDraw){
        let currentX = e.offsetX*window.innerWidth/sizeCanvas[0]
        let currentY = e.offsetY*window.innerHeight/sizeCanvas[1]
        ctx.lineTo(currentX, currentY)
        ctx.stroke()
        prevX = currentX
        prevY = currentY
    }
})

canvas.addEventListener("mousedown", (e)=>{
    prevX = e.offsetX*window.innerWidth/sizeCanvas[0];
    prevY = e.offsetY*window.innerHeight/sizeCanvas[1];
    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    isDraw = true;
})

canvas.addEventListener("mouseup", ()=>{
    isDraw = false;
})

document.querySelector('input[type="color"]').addEventListener("change", ()=>{
    ctx.strokeStyle = document.querySelector('input[type="color"]').value
})

document.querySelector(".fileSave").addEventListener("click", ()=>{
    const download = document.createElement("a");
    let url = canvas.toDataURL()
    download.href = url;
    download.download = "effect generator prikol.ru.png"
    download.click();
})