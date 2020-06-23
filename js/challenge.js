let intervalID = setInterval(increaseTimer, 1000);

let likes = {}

let minus = document.getElementById("minus");

minus.addEventListener("click", decreaseTimer);

let plus = document.getElementById("plus");

plus.addEventListener("click", increaseTimer);

let pause = document.getElementById("pause");

pause.addEventListener("click", adjustTimer);

let heart = document.getElementById("heart");

heart.addEventListener("click", addLike)

let form = document.getElementById("comment-form");

form.addEventListener("submit", postComment);

function increaseTimer() {
    let element = document.getElementById("counter");
    element.textContent = parseInt(element.textContent) + 1
}

function decreaseTimer() {
    let element = document.getElementById("counter");
    element.textContent = parseInt(element.textContent) - 1
}

function adjustTimer() {
    let message = pause.innerText
    if (message === "pause") {
    clearInterval(intervalID);
    minus.disabled = true; 
    plus.disabled = true; 
    heart.disabled = true;
    pause.textContent = "resume";
    } else {
    minus.disabled = false; 
    plus.disabled = false; 
    heart.disabled = false;
    pause.textContent = "pause";
    let element = document.getElementById("counter");
    element.textContent = 0
    intervalID = setInterval(increaseTimer, 1000);
    }
}

function addLike() {
    let element = document.getElementById("counter");
    currentTime = element.textContent
    if (`${currentTime}` in likes) {
        likes[`${currentTime}`] = parseInt(likes[`${currentTime}`]) + 1 
    } else {
    likes[`${currentTime}`] = 1
    } 
    let secondElement = document.createElement('li');
    let likesSection = document.getElementsByClassName("likes")[0];
    likesSection.appendChild(secondElement);
    if (likes[`${currentTime}`] === 1) {
        secondElement.textContent = `${currentTime}: ${likes[`${currentTime}`]} like`
    } else {
    secondElement.textContent = `${currentTime}: ${likes[`${currentTime}`]} likes`
}
}

function postComment() {
    event.preventDefault();
    let comment = document.getElementById("comment-input").value;
    let element = document.createElement('p');
    let commentsSection = document.getElementById("list");
    commentsSection.appendChild(element);
    element.textContent = `${comment}`
}
