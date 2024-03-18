const contextMenu = document.querySelector(".wrapper"),
shareMenu = contextMenu.querySelector(".share-menu");

window.addEventListener("contextmenu", e => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    contextMenuWidth = contextMenu.offsetWidth,
    contextMenuHeight = contextMenu.offsetHeight;

	// to set the insets of the "shareMenu"
    if(x > (winWidth - contextMenuWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = "-200px";
    } else {
        shareMenu.style.left = "";
        shareMenu.style.right = "-200px";
    }
	
	// to set the insets of the contextMenu
    x = x > winWidth - contextMenuWidth ? winWidth - contextMenuWidth - 5 : x;
    y = y > winHeight - contextMenuHeight ? winHeight - contextMenuHeight - 5 : y;
    
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
});

// click anywhere on the page, to hide the contextMenu
document.addEventListener("click", () => contextMenu.style.visibility = "hidden");
