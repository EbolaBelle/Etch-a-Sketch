const container = document.querySelector('.container');

createGrid(16);

const etchNodeList = document.querySelectorAll('.gridbox');

etchNodeList.forEach(element => {
    element.addEventListener('mouseover', handleMouseOver);
})

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add("row");        
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add("gridbox");
            row.appendChild(gridBox);       
        }        
    }
}

function handleMouseOver(event) {
    event.target.classList.toggle("gridbox");
    event.target.classList.toggle('etch');
}