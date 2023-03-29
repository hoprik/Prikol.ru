document.onload = setTimeout(()=>{
    document.querySelector(".effect").style.opacity = 0;
    setTimeout(()=>{
        document.querySelector(".effect").remove();
    }, 1100)
}, 700)


document.querySelectorAll(".dropHref").forEach((button)=>{
    button.onclick = (event)=>{
        event.preventDefault()
        if (button.href.lastIndexOf != "#"){
            const effect = document.createElement('div');
            effect.style.opacity = 0;
            effect.className = "effect"
            document.querySelector("body").appendChild(effect)
            setTimeout(()=>{
                document.querySelector(".effect").style.opacity = 1;
                setTimeout(()=>{
                    window.location.href = button.href;
                }, 1100)
            }, 700)
        }
    }
})

document.querySelectorAll("#main").forEach((button)=>{
    button.onclick = ()=>{
        localStorage.setItem("isShowBlur", "true")
        const effect = document.createElement('div');
        effect.style.opacity = 0;
        effect.className = "effect"
        document.querySelector("body").appendChild(effect)
        setTimeout(()=>{
            document.querySelector(".effect").style.opacity = 1;
            setTimeout(()=>{
                window.location.href = "index.html";
            }, 1100)
        }, 700)
    }
})

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

document.onkeydown = (e)=>{
    if (e.which == 38){
        generator()
    }
    else if (e.which == 40){
        document.querySelectorAll(".snow").forEach((e)=>{
            e.remove();
        })
    }
}

function generator() {
    for (let count = 0; count < 200; count++) {
        let snow = document.createElement("div")
        snow.className = "snow";
        snow.style.left = randomInteger(0, window.innerWidth)+"px";
        snow.style.animationDuration = randomInteger(10, 40)+"s"
        let width = randomInteger(5, 20)
        snow.style.width = width+"px"
        snow.style.height = width+"px"
        snow.style.animationDelay = randomInteger(0, 10)+"s"
        document.querySelector(".workspace").appendChild(snow)
    }
}