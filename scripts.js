const container = document.querySelector('.container');
const button = document.querySelector('button');

const SIZE = 960;

button.addEventListener('click', handleButton)

//createGrid(25);

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let boxSize = (SIZE / gridSize);
        const row = document.createElement('div');
        //row.classList.add("row");
        row.style.cssText = `display: flex; height: ${boxSize + 'px'}; flex-direction: row;;`        
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const gridBox = document.createElement('div');            
            gridBox.style.cssText = `flex: 0 0 ${boxSize + 'px'}; height: auto;`;
            gridBox.classList.add("gridbox");
            row.appendChild(gridBox);       
        }        
    } addMouseFeedback();
}

function handleMouseOver(event) {
    event.target.classList.toggle('gridbox');
    event.target.classList.toggle('etch');
    console.log(event.target);
}

function handleButton(askGrid) {
    askGrid = prompt("New grid size?", '');
   /* while (container.firstChild) {
        container.remove(container.lastChild);
    }*/
    createGrid(askGrid);
    console.log(etchNodeList);
}

function addMouseFeedback () {
    const etchNodeList = document.querySelectorAll('.gridbox');
    etchNodeList.forEach(element => {
        element.addEventListener('mouseover', handleMouseOver);
    })
}