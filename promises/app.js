console.log('Game has started!');

let counter = 0;

window.onload =()=>{
    document.querySelector('button').addEventListener('click', ()=>{
        ++counter;
    });
};


setTimeout(() =>{
    if(counter >5){
        alert('You Won!' + ' you clicked the button: ' + counter + 'times');
    }else{
        alert('You\'re a loser!' + 'you only clicked the button:' + counter +'times');
    }
},2000)