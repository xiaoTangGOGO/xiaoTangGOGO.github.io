let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/1.png') {//如果点击的是第一张图片 则换到第二张图
        myImage.setAttribute('src','image/2.png');
    } else {
        myImage.setAttribute('src','image/1.png');
    }
}

let myButthon = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla 酷毙了，'+myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，'+storedName;
}

myButthon.onclick = function() {
    setUserName();
}