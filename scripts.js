function initiateGrid(n) {
    let gridWrapper = document.getElementById("grid-wrapper");
    
    for (i = 0; i < n * n; i++){
        let gridRow = document.createElement('gridSquare');

        let gridSquare = document.createElement('gridSquare');
        gridSquare.className = "grid-square";
        gridSquare.style.opacity = 1;

        gridSquare.addEventListener("mouseover", (event) => {
                reduceOpacityOnHover(gridSquare)
        });


        gridSquare.style.flexBasis = 100 / n + "%";

        gridWrapper.appendChild(gridSquare);

    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function reduceOpacityOnHover(gridSquare) {
    if(gridSquare.style.opacity > 0) {
        redAmount = getRandomInt(256);
        greenAmount = getRandomInt(256);
        blueAmount = getRandomInt(256);
        gridSquare.style.setProperty('opacity', gridSquare.style.opacity -= 0.1);
        gridSquare.style.setProperty('background-color', 'rgb(' + redAmount + ',' + greenAmount + ',' + blueAmount + ')');
    }

}

function createNewGrid() {
    newSize = prompt("What size should it be? (n * n) up to 100?")
    if(newSize > 100) {
        newSize = 100;
        alert("Number was higher than 100. Creating a grid of size 100 x 100");
    }
    else if(newSize < 0) {
        newSize = 4;
        alert("Number was less than 0. making a default 4 x 4 grid");
    }

    let gridWrapper = document.getElementById("grid-wrapper");
    while (gridWrapper.firstChild) {
        gridWrapper.removeChild(gridWrapper.lastChild);
      }
    initiateGrid(newSize);
}

initiateGrid(3);