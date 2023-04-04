document.querySelector(".start-button").addEventListener("click", () => {
  const titleSlide = document.querySelector(".title-slide");
  titleSlide.style.animation = "fadeOut 1s";
  titleSlide.style.opacity = 0;

  setTimeout(() => {
    titleSlide.style.display = "none";
    document.getElementById("title-video").pause();
  }, 1000);

  setTimeout(() => {
    const fallingLetters = document.getElementById("falling-letters");
    fallingLetters.style.display = "block";
    fallingLetters.childNodes.forEach((letter, index) => {
      letter.style.animationDelay = index * 0.1 + 's';
      letter.style.left = Math.floor(Math.random() * 90) + '%';
    });
    hideButtons();
  }, 1000);

  setTimeout(() => {
    document.getElementById("falling-letters").style.display = "none";
    showSlide();
    showButtons();
  }, 3000);
});


let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function nextPage() {
  if (slideIndex == slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlide();
}

function prevPage() {
  if (slideIndex == 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  showSlide();
}

function showPicture(event) {
  const buttonIndex = Array.from(document.querySelectorAll(".picture-button")).indexOf(event.target);
  const pictureDiv = document.querySelectorAll("#picture1, #picture2")[buttonIndex];
  const image = document.createElement("img");

  const imageSrc = event.target.getAttribute("data-image-src");

  if (!imageSrc) {
    return;
  }

  image.src = imageSrc;

  image.onload = function () {
    pictureDiv.appendChild(image);
    event.target.style.display = "none";
  };

  image.onerror = function () {
    alert("이미지를 불러올 수 없습니다. 이미지 파일 경로를 확인해주세요.");
  };
}

document.querySelectorAll(".picture-button").forEach((button) =>
  button.addEventListener("click", showPicture)
);

document.getElementById("toggle-mute").addEventListener("click", function () {
  const video = document.getElementById("title-video");
  video.muted = !video.muted;
});

function hideButtons() {
  const buttonContainer = document.querySelector(".button-container");
  buttonContainer.style.display = "none";
}

function showButtons() {
  const buttonContainer = document.querySelector(".button-container");
  buttonContainer.style.display = "flex";
}



