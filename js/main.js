const btnPlay = document.getElementById('btn-play');
const grid = document.getElementById('grid-container');
const inputDifficulty = document.querySelector("[name='difficulty']");
const resultEl = document.querySelector(".result-container");
let bombsTotal;
let counter = 0;


btnPlay.addEventListener('click', function () {
    const difficultyLevel = inputDifficulty.value;

    if (difficultyLevel == "unselected"){
        return
    }

    bombsTotal = createBombs(parseInt(difficultyLevel));
    createGrid(+difficultyLevel);

    counter = 0;
    resultEl.innerHTML = '';

    grid.classList.remove("disable-click");
})

function createGrid(celleTotali) {
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

        // click:cambio colore  
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
        showBombs()
        resultEl.innerHTML = `il tuo punteggio é ${counter}`;
        grid.classList.add ("disable-click");
    
    } else {
        this.classList.add("bg-primary");
        counter += 1;
    }
}

function showBombs(){
    for (let i = 0; i < bombsTotal.length; i++){
        cell = document.querySelector(`[data-cell-num="${bombsTotal[i]}"]`)
        if (!cell.classList.contains('bg-danger')){
            cell.classList.add('bg-danger');
        }
    }
}

//generare numero random
function numRandom (min, max) {
	return Math.floor(Math.random () * (max - min + 1) ) + min;
}

//creare le bombe 
function createBombs(celleTotali) {
    const bombs = [];

    //16 bombe 
    while (bombs.length < 16) {
        const number = numRandom(1, celleTotali);

        //controllo numeri uguali
        if (!bombs.includes(number)) {
            bombs.push(number);
        }
    }

    return bombs;
}

;