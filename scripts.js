const container = document.querySelector('.container');

function createGrid(rowSize, columnSize) {
    for (let i = 0; i < rowSize; i++) {
        const row = document.createElement('div');
        row.classList.add("row");        
        container.appendChild(row);
        for (let j = 0; j < columnSize; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add("gridbox");
            row.appendChild(gridBox);       
        }
        
    }
}
createGrid(16, 16);