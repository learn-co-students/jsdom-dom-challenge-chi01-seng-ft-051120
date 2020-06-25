function main() {
  const counter = document.getElementById("counter");
  const plusBtn = document.getElementById("plus");
  const minusBtn = document.getElementById("minus");
  const pauseBtn = document.getElementById("pause");
  const likeBtn = document.getElementById("heart");
  const submitBtn = document.getElementById("submit");
  const commentList = document.getElementById("list");
  const commentForm = document.getElementById("comment-form");
  let count = 0;

  let interval = setInterval(() => {
    counter.innerText = count++;
  }, 1000);

  pauseBtn.addEventListener("click", function (event) {
    if (pauseBtn.innerText == "pause") {
      clearInterval(interval);
      plusBtn.disabled = true;
      minusBtn.disabled = true;
      likeBtn.disabled = true;
      submitBtn.disabled = true;
      pauseBtn.innerText = "activate";
    } else {
      interval = setInterval(() => {
        counter.innerText = count++;
      }, 1000);
      plusBtn.disabled = false;
      minusBtn.disabled = false;
      likeBtn.disabled = false;
      pauseBtn.innerText = "pause";
    }
  });

  plusBtn.addEventListener("click", function (event) {
    count++;
  });

  minusBtn.addEventListener("click", function (event) {
    count--;
  });

  likeBtn.addEventListener("click", function (event) {
    document.querySelector(".likes").innerHTML += `
      <li>Like ${count}</li>
    `;
  });

  commentList.addEventListener("click", function (event) {});

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    commentList.innerHTML += `
      <li>${event.target[0].value}</li>
    `;
    commentForm.reset();
  });
}

main();
