const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const resetButton = document.querySelector('#resetButton');
const matchSelector = document.querySelector('#playTo');

let p1Change = 0;
let p2Change = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function() {
    if(!isGameOver) {
        p1Change +=1; 
    }
    if(p1Change === winningScore) {
        isGameOver = true;   
        p1Score.classList.add('has-text-success');
        p2Score.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
        p1Score.textContent = p1Change;
})

p2Button.addEventListener('click', function() {
    if(!isGameOver) {
        p2Change +=1; 
    }
    if(p2Change === winningScore) {
        isGameOver = true; 
        p2Score.classList.add('has-text-success');
        p1Score.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
        p2Score.textContent = p2Change;
})

matchSelector.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Change = 0;
    p2Change = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Score.classList.remove('has-text-success', 'has-text-danger');
    p2Score.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}