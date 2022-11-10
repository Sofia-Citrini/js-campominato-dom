const btnPlay = document.getElementById('btn-play');
const inputDifficulty = document.querySelector("[name='difficulty']");
let bombsTotal;


btnPlay.addEventListener('click', function () {
    const difficultyLevel = inputDifficulty.value;

    bombsTotal = createBombs(parseInt(difficultyLevel));

    createGrid(+difficultyLevel);
})

function createGrid(celleTotali) {
    const grid = document.getElementById('grid-container');

    grid.innerHTML = "";

    // celle per ogni riga
    const cellRow = Math.sqrt(celleTotali);

    for (let i = 0; i < celleTotali; i++) {
        // creare elemento html
        const newCell = document.createElement('div');
        newCell.classList.add("cell");
        newCell.style.flexBasis = 100 / cellRow + '%';

        // numero progressivo da 1 a 100
        newCell.textContent = i + 1;

        //numero cella:attributo
        newCell.dataset.cellNum = i + 1;

        // click:cambio colore + messaggio in console 
        newCell.addEventListener('click', onClickCell);

        grid.append(newCell);
    }
}

//funzione al click della cella
function onClickCell() {
    const cellNum = +this.dataset.cellNum;

    //numero = bomba
    if (bombsTotal.includes(cellNum)) {
        this.classList.add("bg-danger");
    } else {
        this.classList.toggle("bg-primary");
    }

    console.log(this.textContent);
}

//generare numero random
function numRandom (min, max) {
	return Math.floor(Math.random () * (max - min + 1) ) + min;
}

//creare le bombe 
function createBombs(celleTotali) {
    const bombs = [];

    //16 bombe 
    while (bombs.lenght < 16) {
        const number = numRandom(1, celleTotali);

        //controllo numeri uguali
        if (!bombs.includes(number)) {
            bombs.push(number);
        }
    }

    return bombs;
}

