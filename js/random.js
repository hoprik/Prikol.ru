const image = document.querySelector(".image img")

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

document.querySelector(".reloadButton").addEventListener("click", ()=>{
    image.src = "../images/random/"+Number(getRandomArbitrary(0,234))+".jpg"
    console.log(image);
})