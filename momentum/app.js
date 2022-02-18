const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.className === clickedClass) {
    h1.className = "";
    }
    else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);
// 동일한 기능 h1.onclick = handleTitleClick;