let active = false;
let color = "red";

$(".balance").html(localStorage.balance_g181);

$(".red").click(function () {
  $(".white").removeClass("act");
  $(this).addClass("act");

  color = "red";
});

$(".white").click(function () {
  $(".red").removeClass("act");
  $(this).addClass("act");

  color = "white";
});

$(".modal_ok").click(function () {
  $(".modal").addClass("hidden");
  active = true;
});

$(".spin").click(function () {
  if (!active || +localStorage.balance_g181 < 250) {
    return;
  }

  changeBalance(-250);

  const randColor = randInt(0, 1) == 1 ? "white" : "red";
  const rotateDeg = {
    white: "1080",
    red: "1110"
  };

  $(".wheel").css({
    transform: `rotate(${rotateDeg[randColor]}deg)`
  });

  setTimeout(() => {
    if (randColor == color) {
      gameOver(700);
    }
  }, 2500);
});

window.onload = () => {
  document.querySelector(".wrapper").classList.remove("hidden");
};

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeBalance(amount) {
  localStorage.balance_g181 = +localStorage.balance_g181 + amount;
  $(".balance").html(localStorage.balance_g181);
}

function gameOver(win) {
  if (win) {
    changeBalance(win);
  }

  $(".modal").removeClass("hidden");
  active = false;

  $(".wheel").css({
    transform: `rotate(0deg)`
  });
}
