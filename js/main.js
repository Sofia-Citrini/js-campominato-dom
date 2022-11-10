const btnPlay = document.getElementById('btn-play');


btnPlay.addEventListener('click', function () {
    console.log(this);

    const inputDifficulty = document.querySelector("[name='difficulty']");

    let gridCells = '';
    if (inputDifficulty.value === '1') {
        gridCells = 100;
    } else if (inputDifficulty.value === '2') {
        gridCells = 81;
    } else if (inputDifficulty.value === '3') {
        gridCells = 49;
    }

    createGrid (gridCells);
})

function createGrid (celleTotali) {
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
        newCell.innerHTML = i + 1;
        grid.append(newCell);

        // click:cambio colore + messaggio in console 
        newCell.addEventListener('click', function () {
            newCell.classList.toggle("bg-primary");
            console.log(this.textContent);
        })
    }
}