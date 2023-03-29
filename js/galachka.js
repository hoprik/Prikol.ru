let isdraw = false
let lastTarget;

document.onload = setTimeout(()=>{
    genBox(1920, 1080, 2, 15.2, 13);
}, 0)

function genBox(width, height, margin, w, h){
    for (let hei = 0; hei < height; hei=hei+h+margin){
        for (let wid = 0; wid < width; wid=wid+w+margin) {
            let chek = document.createElement("input")
            chek.type = "checkbox"
            chek.className = "galcka"
            chek.style.zIndex = -1
            
            document.querySelector(".workspaceBlur").appendChild(chek)

        }
        }
}

document

document.addEventListener("mousemove", (e)=>{
    if (isdraw && e.target != lastTarget){
        if (!e.target.checked){
            e.target.checked = true
        }
        else{
            e.target.checked = false
        }
        lastTarget = e.target;
    }
})

document.addEventListener("mousedown", ()=>{
    isdraw = true
})

document.addEventListener("mouseup", ()=>{
    isdraw = false
})