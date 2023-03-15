import "./styles.css";

const boxs = document.querySelectorAll("li");
const button = document.getElementsByClassName("button")[0];
const boxContainer = document.getElementsByClassName("container1")[0];

const dataChange = [
  {
    deg: -15,
    left: 100,
    top: 20
  },
  {
    deg: -5,
    left: 10,
    top: 0
  },
  {
    deg: 5,
    left: -10,
    top: 0
  },
  {
    deg: 15,
    left: -100,
    top: 20
  }
];

const dataChange2 = [
  {
    deg: 0,
    left: 0,
    top: 0
  },
  {
    deg: 0,
    left: 0,
    top: 0
  },
  {
    deg: 0,
    left: 0,
    top: 0
  },
  {
    deg: 0,
    left: 0,
    top: 0
  }
];

//Code

//Box
function animateCard(condition) {
  boxs.forEach((el, index) => {
    el.style.transition = "all 2s";
    if (!condition) {
      el.style.transform = `translate(${dataChange[index].left}px,${dataChange[index].top}px) rotate(${dataChange[index].deg}deg)`;
    } else {
      el.style.transform = `translate(${dataChange2[index].left}px,${dataChange2[index].top}px) rotate(${dataChange2[index].deg}deg)`;
    }
  });
}

boxContainer.addEventListener("mouseenter", () => {
  console.log(boxContainer);
  animateCard(true);
  boxContainer.style.width = "60rem";
  boxContainer.style.transition = "all 2s";
});

boxContainer.addEventListener("mouseleave", () => {
  animateCard(false);
  boxContainer.style.width = "30rem";
  boxContainer.style.transition = "all 2s";
});

//Button
button.addEventListener("click", () => {
  fetch("https://source.unsplash.com/random/?wallpaper,indonesia").then(
    (data) => {
      boxs[0].style.backgroundImage = `url(${data.url})`;
    }
  );

  fetch("https://source.unsplash.com/random/?wallpaper,car").then((data) => {
    boxs[1].style.backgroundImage = `url(${data.url})`;
  });

  fetch("https://source.unsplash.com/random/?wallpaper,fruit").then((data) => {
    boxs[2].style.backgroundImage = `url(${data.url})`;
  });

  fetch("https://source.unsplash.com/random/?wallpaper,cute").then((data) => {
    boxs[3].style.backgroundImage = `url(${data.url})`;
  });
});
