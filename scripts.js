function initiateGrid(n) {
    let gridWrapper = document.getElementById("grid-wrapper");
    for(i = 0; i < n; i++){
        let div = document.createElement('div');
        div.id = "grid-square";
        div.style.opacity = 1;
        div.addEventListener("mouseenter", (event) => {
            if(div.style.opacity > 0) {
                redAmount = getRandomInt(256);
                greenAmount = getRandomInt(256);
                blueAmount = getRandomInt(256);
                div.style.setProperty('opacity', div.style.opacity -= 0.1);
                div.style.setProperty('background-color', 'rgb(' + redAmount + ',' + greenAmount + ',' + blueAmount + ')');
            }
        });
        gridWrapper.appendChild(div);
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
  
initiateGrid(16)

