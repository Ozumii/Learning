//rewriting with promises es6//

function startGame(){

    let counter = 0;
    //without this when the browser launches the page document.querySelector will return a Null argument. 
    window.onload =()=>{
        document.querySelector('button').addEventListener('click', ()=>{
            ++counter;
        });
    };
/**
 * What is a Promise? This is a way to handle async codes, a tool that helps us execute some code at a future time
 * The code below starts a promise that we want to execute 2s into the future
 * 
 * What that means is we are creating a promise  if the promise is met ie the button is clicked 5x's we execute resolve(), 
 * if this fails it executes reject().
 * 
 * 
 * Promises have 3 possible states
 * 1. Unresolved -->waiting for something to finish
 * 2. Resolved --> something finished and everything is OK
 * 3. Rejected --> something finished and something went wrong
 * 
 * Promise will only ever accept 2 call backs
 */
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(counter>5){
                resolve();
            }else{
                reject();
            }
        },2000);
    });
    
    
  
};

startGame()
  //When linking this it creates a new Promise which takes in resolve = .then() or reject = .catch() 
    .then(()=>{
        alert('You Win!');
        })
    .catch(()=>{
            alert('You Lose!');
        });
