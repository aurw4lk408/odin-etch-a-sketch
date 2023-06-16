function createBaseGrid() {
    //create new column//
    for (let i = 0; i < 16; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);

        //create new row//
        for (let j = 0; j < 16; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            column.appendChild(square);
            //make squares blue when hovered over//
            square.addEventListener('mouseover', () => {
                square.classList.add("blue");
            });
            random.addEventListener('click', () => {
                //removes blue color, stops previous event listener//
                square.removeEventListener('mouseover', () => {
                    square.classList.add("blue");
                });
                //generates random color//
                let symbols, color;
                symbols = "0123456789ABCDEF";
                color = "#";
                for (let i = 0; i < 6; i++) {
                    color = color + symbols[Math.floor(Math.random() * 16)];
                }   
                //adds random color to square//
                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = color;
                });
            });
            black.addEventListener('click', () => {
                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = "";
                    square.classList.remove("blue");
                    square.classList.add("black");
                });
            });
            blue.addEventListener('click', () => {
                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = "";
                    square.classList.remove("black");
                    square.classList.add("blue");
                });
            });
            clear.addEventListener('click', () => {
                square.style.backgroundColor = "";
                square.classList.remove("black");
                square.classList.remove("blue");
            });
        };       
        }
    }


function createUserGrid() {
    let number = prompt("How big do you want the grid to be? Ex: inputting 10 would give a grid of 10x10 squares")
    if (number > 100 || number <= 0) {
        alert("Error: must choose a number between 0 and 100")
        return;
    }
    else {
        //overwrite previous grid//
        document.getElementById("container").innerHTML = "";

        //make new grid of size 'number', put it in the 'container' div//
        for (let i = 0; i < number; i++) {
            let column = document.createElement("div");
            column.classList.add("column");
            container.appendChild(column);

            for (let j = 0; j < number; j++) {
                let square = document.createElement("div");
                square.classList.add("square");
                column.appendChild(square);
                square.addEventListener('mouseover', () => {
                    square.classList.add("blue");
                });

                random.addEventListener('click', () => {
                    square.removeEventListener('mouseover', () => {
                        square.classList.add("blue");
                    });
                    let symbols, color;
                    symbols = "0123456789ABCDEF";
                    color = "#";
                    for (let i = 0; i < 6; i++) {
                        color = color + symbols[Math.floor(Math.random() * 16)];
                    }   
                    square.addEventListener('mouseover', () => {
                        square.style.backgroundColor = color;
                    });
                    black.addEventListener('click', () => {
                        square.addEventListener('mouseover', () => {
                            square.style.backgroundColor = "";
                            square.classList.remove("blue");
                            square.classList.add("black");
                        });
                    });
                    blue.addEventListener('click', () => {
                        square.addEventListener('mouseover', () => {
                            square.style.backgroundColor = "";
                            square.classList.remove("black");
                            square.classList.add("blue");
                        });
                    });
                    clear.addEventListener('click', () => {
                        square.style.backgroundColor = "";
                        square.classList.remove("black");
                        square.classList.remove("blue");
                    });
                });
            }
        }
    }
}

const container = document.querySelector('.container');
const size = document.querySelector('.size');
const random = document.querySelector('.random-color');
const black = document.querySelector('.black-btn');
const blue = document.querySelector('.blue-btn');
const clear = document.querySelector('.clear');

createBaseGrid();
size.addEventListener('click', createUserGrid);
