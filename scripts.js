const container = document.querySelector('.container');

createGrid(16, 16);

const etchNodeList = document.querySelectorAll('.gridbox');

etchNodeList.forEach(element => {
    element.addEventListener('mouseover', handleMouseLeave);
})

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

function handleMouseLeave(event) {
    event.target.classList.toggle("gridbox");
    event.target.classList.toggle('etch');
}