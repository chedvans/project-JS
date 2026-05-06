

function change(){
changeFontColor()
changeColor()
changeFont()

}

let formSide = document.querySelector(".form-side")
let font = document.querySelector(".form-title")
let type = document.querySelector(".form-subtitle")



function changeFontColor(){

    let fontColor=document.getElementById("fontColorSelect").value

  font.style.color=fontColor
  type.style.color=fontColor


}

function changeColor(){

    let backgroundColor=document.getElementById("backgroundColorSelect").value

formSide.style.backgroundColor=backgroundColor

document.body.style.backgroundColor=backgroundColor
}

function changeFont(){
   let FontType=document.getElementById("fontSelect").value
type.style.fontFamily=FontType
formSide.style.fontFamily=FontType


}


