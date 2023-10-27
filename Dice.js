var num = Math.floor(Math.random() * 6)+1;

var random_images = "dice" + num + ".png";

var random_images_source = "images/"+random_images;

var imagess = document.querySelectorAll("img")[0]

imagess.setAttribute("src",random_images_source);

//second image
var sec_num = Math.floor(Math.random()*6)+1;

random2_source = "images/dice"+ sec_num +".png";

document.querySelectorAll("img")[1].setAttribute("src",random2_source);

if(num > sec_num){
    document.querySelector("h1").innerHTML = "😎Player 1 Wins";
}
else if(num < sec_num){
    document.querySelector("h1").innerHTML = "😎Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "😎Draw";
}