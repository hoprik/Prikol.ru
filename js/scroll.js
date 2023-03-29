let images = []
let count_images = -1
let last_save;

document.querySelector(".file").addEventListener("click", ()=>{

    const open_file = document.createElement("input")
    open_file.type = "file"
    open_file.addEventListener('change', (event) => {
        const fileList = event.target.files;
        const file = fileList[0]
        count_images++
        images.push(file)
        render_image(file)
        render_mini(file)
    })
    open_file.click()
})

function render_image(file){
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const image_photo = document.querySelector(".image img").src = event.target.result;
    });
    reader.readAsDataURL(file);
    document.querySelector(".file").value = ''
}

function render_mini(file){
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        const miniature_div = document.createElement("div")
        miniature_div.className = "images"
        const miniature = document.createElement("img")
        miniature.className = "images_img"
        miniature_div.appendChild(miniature)
        document.querySelector(".choose_images").appendChild(miniature_div)
        miniature.src = event.target.result;
    });
    reader.readAsDataURL(file);
    document.querySelector(".file").value = ''
}

if (document.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+, Ch31+
      document.addEventListener("wheel", onWheel);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      document.addEventListener("mousewheel", onWheel);
    } else {
      // Firefox < 17
      document.addEventListener("MozMousePixelScroll", onWheel);
    }
  } else { // IE8-
    document.attachEvent("onmousewheel", onWheel);
  }

function onWheel(e){
    e = e || window.event;
    // wheelDelta не даёт возможность узнать количество пикселей
    var delta = e.deltaY || e.detail || e.wheelDelta;
    if (last_save != null){
        document.querySelector(".choose_images").querySelectorAll(".images")[count_images].querySelector(".images_img").style.border = ""
    }
    if (count_images != -1){
    count_images+= delta/100;
    }
    if (count_images >= images.length){
        count_images = 0
    }
    else if (count_images == -1){
        count_images = images.length-1
    }
    console.log();
    document.querySelector(".choose_images").querySelectorAll(".images")[count_images].querySelector(".images_img").style.border = "2px solid white"
    render_image(images[count_images])
    last_save = count_images
}

