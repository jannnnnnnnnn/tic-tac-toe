// boxState: 0 means o just went, 1 means x just went
let boxState=0;
let xPlacement=[];
let oPlacement=[];
let numOfPlacement=9;
let i=0;
let j=0;

//8 winning combinations
let winningCombo1=['box11', 'box12', 'box13'];
let winningCombo2=['box11', 'box22', 'box33'];
let winningCombo3=['box11', 'box21', 'box31'];
let winningCombo4=['box12', 'box22', 'box32'];
let winningCombo5=['box13', 'box23', 'box33'];
let winningCombo6=['box13', 'box22', 'box31'];
let winningCombo7=['box31', 'box32', 'box33'];
let winningCombo8=['box21', 'box22', 'box23'];
let totalWinningCombo=[winningCombo1, winningCombo2, winningCombo3, winningCombo4, winningCombo5, winningCombo6, winningCombo7, winningCombo8];



//set boxes
let screenSize=window.innerWidth;
const allBoxes= document.querySelectorAll('div');
//console.log(allBoxes);
allBoxes.forEach(function(x){
    x.style.height=(screenSize/3)/3 +'px';
    x.style.fontSize= (screenSize/9)/1.5+'px';
    //console.log('i am here');
})

//input x and o
allBoxes.forEach(function(x){
    x.addEventListener('click',function(y){
        //alert(`i is ${i}, j is ${j}`);
        if (numOfPlacement<9){
            if (y.target.innerHTML=="" && boxState==0){
                y.target.innerHTML ="X";
                boxState++;
                numOfPlacement++;
                xPlacement.push (y.target.className);
            } else if (y.target.innerHTML=="" && boxState==1){
                y.target.innerHTML ="O";
                boxState--;
                numOfPlacement++;
                oPlacement.push (y.target.className);
            } else {
                alert ("Box is current occupied, Choose a different box.");
            }

            totalWinningCombo.forEach(function(a){
                //alert(`oPlacement is ${oPlacement}`);
                //does oPlacement have all the 
                a.forEach(function(b){
                    //oPlacement=[box11, box12]
                    //alert (`b is ${b}`);                
                    if (oPlacement.some(nums => nums==b)){
                        i++;
                    }
                    if (xPlacement.some(nums => nums==b)){
                        j++;
                    }
                    //alert ("i am in a loop");
                })
                //alert("i am in checking winning combo");
    
                if (i==3){
                    //setTimeout(function(){alert("Congrats! Player O wins")},500) 
                    alert ("Congrats! Player O wins");
                    numOfPlacement=9;
                    //i=0;
                } else if (j==3){
                    alert ("Congrats! Player X wins");
                    numOfPlacement=9;
                    //j=0;
                } else {i=0; j=0}
            //alert (i);
            })
            
        } else {
            alert ("To start the game, click on the Let's Start the Game button.");
        }
        

    })
})


//initate the game
//asking user who goes first
const btn=document.querySelector('button');
btn.addEventListener('click',function(evt){
    let userInput= prompt("Who wants to go first, enter X or O");
    i=0;
    j=0;
    if (userInput=='x' || userInput=='X' ){
        boxState= 0;
        resetGame();
    } else if (userInput=='o' || userInput=='O' || userInput=='0'){
        boxState=1;
        resetGame();
    } else {
        alert ("invalid entry, please only enter X or O");
}
})
//initialization of the gameboard
function resetGame(){
    allBoxes.forEach(function(x){
        //alert(`x is ${x}`)
        x.innerHTML="";
    })
    numOfPlacement=0;
    i=0;
    j=0;
    oPlacement=[];
    xPlacement=[];
}



