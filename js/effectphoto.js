let Image_container;
let Image_src;
let effect_code = {}
const lang = {
    brightness:"Яркость",
    vibrance:"Насыщенность",
    hue:"Оттенок",
    gamma:"Гамма",
    clip:"Клип",
    stackBlur:"Размытие",
    contrast:"Контраст",
    saturation:"Насыщенность",
    exposure:"Экспозиция",
    sepia:"Сепия",
    noise:"Шум",
    sharpen:"Точность",
}
let element_add = []

document.querySelector(".getButton").addEventListener("click", ()=>{

    const open_file = document.createElement("input")
    open_file.type = "file"
    open_file.addEventListener('change', (event) => {
        const fileList = event.target.files;
        const file = fileList[0]
        render_image(file)
    })
    open_file.click()
})

function render_image(file){
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const image_photo = document.querySelector(".image img").src = event.target.result;
      Image_src = image_photo;
      Image_container = document.querySelector(".image img");
    })
    reader.readAsDataURL(file);
}

document.querySelector(".fileSave").addEventListener("click", ()=>{
    const download = document.createElement("a");
    let url = document.querySelector("#image_img").toDataURL()
    download.href = url;
    download.download = "effect generator prikol.ru.png"
    download.click();
})

document.querySelector(".effectList_s").addEventListener("change", ()=>{
    let isFind = false;
    const elem = document.querySelector(".effectList_s").value
    try{
        document.querySelector(".inputList input").value = effect_code[elem];
    }catch(e){
        document.querySelector(".inputList input").value = 0;
    }

})

document.querySelector(".inputList").addEventListener("change", ()=>{
    const elem = document.querySelector(".effectList_s").value
    console.log(elem);
    effect_code[elem] = document.querySelector(".inputList input").value;
    if (element_add.length >= 1){
        element_add.forEach(element => {
            if (element != elem){
                const option = document.createElement("option")
                option.value = elem
                option.text = lang[elem]
                document.querySelector(".userList_S").appendChild(option);
                element_add.push(elem)
            }
        });
    }
    else{
        const option = document.createElement("option")
        option.value = elem
        option.text = lang[elem]
        document.querySelector(".userList_S").appendChild(option);
        element_add.push(elem)
    }
    renderEffect();
})

function renderEffect(){
    document.querySelector("#image_img").remove()
    document.querySelector(".image").appendChild(Image_container)
    Caman("#image_img", function () {
        if(effect_code["brightness"] != undefined){
            this.brightness(effect_code["brightness"])
        }
        if(effect_code["vibrance"] != undefined){
            this.vibrance(effect_code["vibrance"])
        }   
        if(effect_code["hue"] != undefined){
            this.hue(effect_code["hue"])
        }   
        if(effect_code["gamma"] != undefined){
            this.gamma(effect_code["gamma"])
        }   
        if(effect_code["clip"] != undefined){
            this.clip(effect_code["clip"])
        }   
        if(effect_code["stackBlur"] != undefined){
            this.stackBlur(effect_code["stackBlur"])
        }   
        if(effect_code["contrast"] != undefined){
            this.contrast(effect_code["contrast"])
        }   
        if(effect_code["saturation"] != undefined){
            this.saturation(effect_code["saturation"])
        }   
        if(effect_code["exposure"] != undefined){
            this.exposure(effect_code["exposure"])
        }   
        if(effect_code["sepia"] != undefined){
            this.sepia(effect_code["sepia"])
        }   
        if(effect_code["noise"] != undefined){
            this.noise(effect_code["noise"])
        }   
        if(effect_code["sharpen"] != undefined){
            this.sharpen(effect_code["sharpen"])
        }   
        this.render();
    })   
}
