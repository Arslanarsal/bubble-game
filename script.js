var timer = 5;
var scro = 0;
var hintnum;

function increase() {
  scro++;
  document.querySelector("#score").textContent = scro;
}
function makebubble() {
  var clutter = "";
  for (var i = 1; i <= 200; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function runtime() {
  var time = setInterval(function () {
    document.getElementById("timer").innerText = timer;
    if (timer > 0) {
      timer--;
    } else {
      clearInterval(time);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function hitbox() {
  hintnum = Math.floor(Math.random() * 10);
  document.querySelector("#hitbox").innerHTML = hintnum;
}

document.querySelector("#pbtm").addEventListener("click", (deta) => {
  var scr = Number(deta.target.textContent);
  if (scr === hintnum) {
    increase();
    makebubble();
    hitbox();
  }
});

makebubble();
runtime();
hitbox();
