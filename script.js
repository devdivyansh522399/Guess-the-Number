'use strict'
let secret = Math.trunc(Math.random()*20)+1;
console.log(secret)
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(guess<0 || guess>20){
        document.querySelector('.notification').textContent='Enter between 1-20π';
    }
    else if(!guess){
        document.querySelector('.notification').textContent='No numberπ';
    }
    else if(guess == secret){
        document.querySelector('.notification').textContent = 'π Hurrah! Correct';
        if(highscore<score){
            document.querySelector('.highscore').textContent=score;
        }
        document.querySelector('body').style.background='linear-gradient(rgb(107, 241, 80),white)';
    }
    else if(guess<secret && score>0){
        document.querySelector('.notification').textContent='π Guess little big';
        score--;
        document.querySelector('.score').textContent=score;
    }
    else if(guess>secret && score>0){
        document.querySelector('.notification').textContent = 'π Guess little small';
        score--;
        document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.notification').textContent='ππ you lost';
        document.querySelector('body').style.background='linear-gradient(rgb(243, 5, 5),white)';    
    }
})

document.querySelector('.again').addEventListener('click', function(){
    secret = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.notification').textContent='Start Geussing...!ππ'
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').textContent='Enter Number';
    document.querySelector('body').style.background='linear-gradient(rgb(0, 0, 0),white)'; 
})
