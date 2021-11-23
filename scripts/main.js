var myHeading = document.querySelector('h1');
myHeading.textContent = 'Всем привет!!! Мы семейка Vassman!';
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Фото аватар сайт.jpg') {
        myImage.setAttribute ('src','images/Снимок экрана 2018-12-16 в 21.07.45.jpeg');
    } else {
        myImage.setAttribute ('src','images/Фото аватар сайт.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Дима и Эля');
    localStorage.setItem('Дима и Эля', myName);
    myHeading.textContent = 'Всем привет!!! Мы семейка Vassman!' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Всем привет!!! Мы семейка Vassman!' + storedName;
}
myButton.onclick = function() {
    setUserName();
}