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

// gallery
const nextButton = document.getElementById('btnNext');
const prevButton = document.getElementById('btnPrev');

nextButton.onclick = () => {
    document.getElementById('gallery1').scrollBy(300, 0);
};

prevButton.onclick = () => {
    document.getElementById('gallery1').scrollBy(-300, 0);
};
 
// anch adjustment

const navBarHeight = document.querySelector('.topBar').offsetHeight;

document.documentElement.style.setProperty('--wrapperTopMargin', `${navBarHeight + 5}px`);

function stickyHeightUpdate() {
    let newNavBarHeight = document.querySelector('.topBar').offsetHeight;
    document.documentElement.style.setProperty('--scrollAnch-padding', newNavBarHeight +5 + "px");
};

window.addEventListener("load", stickyHeightUpdate);
window.addEventListener("resize", stickyHeightUpdate);