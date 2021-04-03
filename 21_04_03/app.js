// const button = document.getElementById('btn')
// const input = document.getElementById('events')[0].value;

// input.addEventListener()

const score = [0, 0];

const winScore = Number(document.getElementById('winscore').value);

const spanPl1 = document.getElementById('spanPl1')
const spanPl2 = document.getElementById('spanPl2')
const btn1 = document.getElementById('pl1')
const btn2 = document.getElementById('pl2')
const reset = document.getElementById('reset')
const spans = document.querySelectorAll('span');

console.log(winScore)

btn1.addEventListener('click', increaseCounter)
btn2.addEventListener('click', increaseCounter)

function increaseCounter(){
    const pl = this.id.slice(-1) - 1;
    score[pl]++;
    spans[pl].textContent = score[pl];

    if(score[pl] === winScore) {
        spans[pl].style.color = 'Green'
        spans[1 - pl].style.color = 'Red'
        btn1.disabled = true;
        btn2.disabled = true;
        alert(`Player ${pl + 1} wins!!!`)
    }
}

reset.addEventListener('click', onReset)

function onReset(){
    
}
