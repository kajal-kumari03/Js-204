let exploreIndiaImg = document.querySelector(".explore_india_img");
let rightSideBtn = document.querySelector(".right_side_btn");
let leftSideBtn = document.querySelector(".left_side_btn");
let imgCount = 0;

rightSideBtn.addEventListener("click", () => {
    try {
        if (imgCount < exploreIndiaImg.children.length - 1) {
            imgCount++;
        } else {
            imgCount = 0;
        }
        moveContainer();
    } catch (err) {
        console.log(err);
    }
    
});

function moveContainer() {
    for (let i = 0; i < exploreIndiaImg.children.length; i++) {
        exploreIndiaImg.children[i].style.transform = `translateX(-${imgCount * 100}%)`;
    }
}
moveContainer();