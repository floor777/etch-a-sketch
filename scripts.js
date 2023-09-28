function initiateGrid(n) {
    let gridWrapper = document.getElementById("grid-wrapper");
    for(i = 0; i < n * n; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = "red";
        gridWrapper.appendChild(div);


    }

}
initiateGrid(16)

