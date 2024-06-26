let img_content = document.querySelector('img');
let header_1 = document.querySelector('h1');
let header_2 = document.querySelector('h2');
let name_filed = document.getElementById('name_filed');
let button = document.querySelector('button');

img_content.onclick = function () {
  let img_src = img_content.getAttribute('src');
  if (img_src === 'img/spring.png') {
    img_content.setAttribute('src', 'img/netflix.png');
    header_1.textContent = 'Hello, Netflix!';
  } else {
    img_content.setAttribute('src', 'img/spring.png');
    header_1.textContent = 'Hello, Spring!';
  }
}

button.onclick = function () {
  setUserName();
}

function setUserName() {

  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    name_filed.textContent = 'Welcome, ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  name_filed.textContent = 'Welcome, ' + storedName;
}
