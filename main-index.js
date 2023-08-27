// Scroll up button
let scrollButton = document.getElementById("topButton");

window.onscroll = function() {scrollUp()};

function scrollUp() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
    scrollButton.style.display = "block";
    } else {
    scrollButton.style.display = "none";
    }
};

function scrollToTop() { 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// anch adjustment

let navBarHeight = document.querySelector('.nav').offsetHeight;

document.documentElement.style.setProperty('--wrapperTopMargin', `${navBarHeight + (navBarHeight * 0.75)}px`);

function stickyHeightUpdate() {
    document.documentElement.style.setProperty('--scrollAnch-padding', `${navBarHeight + 10}px`);
};

window.addEventListener("load", stickyHeightUpdate);
window.addEventListener("resize", stickyHeightUpdate);

// modal stuff
function openModal() {
    document.getElementById("theModal").style.display="block";
}

function closeModal() {
    document.getElementById("theModal").style.display ="none";
}

const scrImgList = document.getElementsByClassName("modal-preview-img");

const theBigPicture = document.getElementById("modal-content");

function currentImg(n) {
    i = (n - 1);
    console.log(scrImgList[i].src);
    theBigPicture.setAttribute("src", scrImgList[i].src);
}