let text = document.querySelector('.intro-heading');
let headerText = text.textContent;

const splitText = headerText.split("");
text.textContent = "";
console.log(splitText);

for(let i=0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}


let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if (char === splitText.length) {
    complete();
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}