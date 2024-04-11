function toggle() {
    var button =document.querySelector(".toggle-button");
if(button.innerHTML==='Toggle Off'){
    button.innerHTML='Toggle On';
} else{
    button.innerHTML ='Toogle Off';
}

}









// let  slideIndex =0;
// showSlides();

// function showSlides(){
//     let slides=document.getElementsByClassName("slide fade");
//     for(let i=0; i<slides.length;i++){
//         slides[i].computedStyleMap.display = "none";
//     }
//     slideIndex++;
//     if(slideIndex>slides.length){slideIndex=1}
//     slides[slideIndex-1].computedStyleMap.display ="block";
//     setTimeout(showSlides,2000); //change image every two seconds
// }
