let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/headshotttt.png') {
        myImage.setAttribute('src','images/Passport.jpeg');
    } else {
        myImage.setAttribute('src','images/headshotttt.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'beep beep, ' + myName;
}

myButton.onclick = function() {
    setUserName();
}