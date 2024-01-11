const images = document.querySelectorAll(".gallery-image");
// console.log(images);

let imgSrc;
let selectedImage;

const modal = document.querySelector(".modal");
const modalItem = document.querySelector(".modal-item");

const clikcedImage = document.createElement("img");

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    selectedImage = imgSrc;
    console.log(imgSrc);
    console.log("selected", selectedImage);

    //modal
    modal.style.display = "initial";

    //images
    clikcedImage.setAttribute("src", `${selectedImage}`);
    clikcedImage.setAttribute("class", "modal-image");

    modalItem.appendChild(clikcedImage);

    //scroll
    document.body.style.overflow = "hidden";
  });
});

//close

const close = document.querySelector(".modal-close");

const modalClose = () => {
  modal.style.display = "none";

  clikcedImage.removeAttribute("src");

  document.body.style.overflow = "initial";
};

close.addEventListener("click", modalClose);

//close on click outside

window.onclick = function (e) {
  if (e.target === modal) {
    modalClose();
  }
};
