
var arr = [[1,2,3],[4,5,6],[7,8,9]];
var player = "n";
var clickCount=0;
var clickedButtonId;
//const desButton;

//it gets the ID of some randomly clicked buttion*************
function reply_click(e) {
    e = e || window.event;
    e = e.target || e.srcElement;
    if (e.nodeName === 'BUTTON') {
       // alert(e.id);
       clickedButtonId = e.id;
        console.log(clickedButtonId + "   <-iddddddd") ;
        ticTac(clickedButtonId);
    }
}

function ticTac(id){
    let result ="";
    clickCount += 1;
    const desButton = document.getElementById(id); 
    if(clickCount%2 === 0){
        player = "X";      
        console.log(desButton);
        console.log(player);
        desButton.disabled = true;       
        desButton.innerText="X" ;
        desButton.style.fontWeight = 'bold';
        //desButton.innerText.fontsize="50";
        desButton.style.color='white';
        desButton.style.fontSize='30px';
        desButton.style.backgroundColor = "blue"; 
    }
    else{player = "O";      
        console.log(desButton);
        console.log(player);
        desButton.disabled = true;
        desButton.innerText="O";
        desButton.style.fontWeight = 'bold';
        desButton.style.color='white';
        desButton.style.fontSize='30px';
        desButton.style.backgroundColor = "black"; 
    }

    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            let key = arr[i][j];
            console.log(key + "   KEY");
            if(key == id){
                arr[i][j] = player;
                console.log(arr);
                console.log(arr[i][j]  + "  arrPlayerValue");             
                j = 4;
                i = 4;
            }  
        }           
    }

    console.log('clickCount: ', clickCount)

    let one = arr[0][0]; let two = arr[1][1]; let three = arr[2][2];
    if(one == two && two == three){
        result = "Player  " + one + " won!!"; console.log(result);
        let results = document.createElement('label');
        results.id='reText';
        results.textContent = result;
        results.style.fontSize = '25px';
        results.style.color = 'white';
        results.style.fontWeight= 'bold';
        document.body.append(results);       
        disableRemaining();
        let resultText = document.getElementById('reText');
        if(resultText.textContent == "Player  " + "O" + " won!!" || resultText.textContent == "Player  " + "X" + " won!!" || resultText.textContent == "It's a draw. Game Over!!" ){
            setTimeout(reset, 3000)
         } 
         return result;    
    }

    let one1 = arr[0][2]; let two1 = arr[1][1]; let three1 = arr[2][0];
    if(one1 == two1 && two1 == three1){
        result = "Player  " + one1 + " won!!"; console.log(result);
        let results = document.createElement('label');
        results.id='reText';
        results.textContent = result;
        results.style.fontSize = '25px';
        results.style.color = 'white';
        results.style.fontWeight= 'bold';
        document.body.append(results);       
        disableRemaining();
        let resultText = document.getElementById('reText');
        if(resultText.textContent == "Player  " + "O" + " won!!" || resultText.textContent == "Player  " + "X" + " won!!" || resultText.textContent == "It's a draw. Game Over!!" ){
            setTimeout(reset, 3000)
            return
        }  
    }
     
    for(let i = 0; i< 3; i++){
        let one = arr[i][0]; let two = arr[i][1]; let three = arr[i][2];
        if(one == two && two == three){
            result = "Player  " + one + " won!!"; console.log(result);
            let results = document.createElement('label');
            results.id='reText';
            results.textContent = result;
            results.style.fontSize = '25px';
            results.style.color = 'white';
            results.style.fontWeight= 'bold';
            document.body.append(results);
            disableRemaining();
            let resultText = document.getElementById('reText');
            if(resultText.textContent == "Player  " + "O" + " won!!" || resultText.textContent == "Player  " + "X" + " won!!" || resultText.textContent == "It's a draw. Game Over!!" ){
                setTimeout(reset, 3000)
                return
            } 
        }
    }
    for(let i = 0; i< 3; i++){
        let one = arr[0][i]; let two = arr[1][i]; let three = arr[2][i];
        if(one == two && two == three){
            result = "Player  " + one + " won!!"; console.log(result);
            let results = document.createElement('label');
            results.id='reText';
            results.textContent = result;
            results.style.fontSize = '25px';
            results.style.color = 'white';
            results.style.fontWeight= 'bold';
            document.body.append(results);       
            disableRemaining();
            let resultText = document.getElementById('reText');
            if(resultText.textContent == "Player  " + "O" + " won!!" || resultText.textContent == "Player  " + "X" + " won!!" || resultText.textContent == "It's a draw. Game Over!!" ){
                setTimeout(reset, 3000)
                return
            } 
        }
    }
  
    if(clickCount === 9){
        result = "It's a draw. Game Over!!"
        let results = document.createElement('label');
        results.id='reText';
        results.textContent = result;
        results.style.fontSize = '25px';
        results.style.color = 'white';
        results.style.fontWeight= 'bold';
        document.body.append(results);       
        disableRemaining();
        let resultText = document.getElementById('reText');
        if(resultText.textContent == "Player  " + "O" + " won!!" || resultText.textContent == "Player  " + "X" + " won!!" || resultText.textContent == "It's a draw. Game Over!!" ){
            setTimeout(reset, 3000)
            return
        }
    };


}

function disableRemaining(){
    const buttons = document.getElementsByClassName("tttbtn"); 
    for(let i=0; i<buttons.length; i++){
        buttons[i].disabled=true;
    }
}
   

//Reset the game
function reset() {
    const tbtn = document.getElementsByClassName("tttbtn"); 
    console.log(tbtn.length)
    arr = [[1,2,3],[4,5,6],[7,8,9]];
    for(let i=0; i<tbtn.length; i++){
        console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjj")
        tbtn[i].disabled=false;
        tbtn[i].innerText="";
        tbtn[i].style.backgroundColor = "#94f6d1"; //#94f6d1;  rgb(159, 205, 50)
    }
    clickCount = 0;
    let resul=document.getElementById("reText");
    resul.remove();
}