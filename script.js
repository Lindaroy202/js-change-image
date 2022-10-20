let btn = document.querySelector("button")
let div = document.querySelector("div")

btn.addEventListener("click", ()=>{
    if (div.style. display === "none"){
        div.style.display = "block"
    }else{
        div.style.display = "none";
    }
})


function changeImage(fileName) {
    let img = document.querySelector(".bannerImage");
    img.setAttribute("src", fileName);
  }