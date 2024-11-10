const button = document.querySelector('button')
const container = document.querySelector('.container');
let value = ''
let grid = 0

button.addEventListener('click',() =>{
    value = prompt("What is the width of the grid you would like?")

    if(parseInt(value) > 100){
        alert('Grid cannot be more than 100 cells wide')
    }else{
        value = parseInt(value)
    }
    container.replaceChildren()
    container.style.cssText = `max-width: ${(value*10)}px;max-height: ${(value*10)}px;`
    
    grid = value * value
    
    for(let i = 0;i < grid;i++){
        const div = document.createElement('div');
        div.style.cssText = "height: 10px; width:10px; background-color: white;"
        container.appendChild(div);

        div.addEventListener('mouseleave',() =>{
            div.style.backgroundColor = 'black'
        })
    }
})

