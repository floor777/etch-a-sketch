function initiateGrid(n) {
    let gridWrapper = document.getElementById("grid-wrapper");
    for(i = 0; i < n; i++){
        let div = document.createElement('div');
        div.id = "grid-square";
        div.style.opacity = 1;
        div.addEventListener("mouseenter", (event) => {
            if(div.style.opacity > 0) {
                div.style.opacity -= 0.1;
            }
            

        });

        div.addEventListener("mouseleave", (event) => {
            // div.style.opacity = 1;

        });
        gridWrapper.appendChild(div);


    }

}
initiateGrid(16)

