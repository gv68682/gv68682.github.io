
    let imgArr = [ "pacman1.png","sonic2.png" ]
    let pacArr=[]
    let xPosition = []
    let yPosition =[]
    let xVelocity =[]
    let yVelocity = []
    let counter=0;
    let stop = false;
// let direction = 0;
// let focus = 0;
function addPacmen(img1, xPos, yPos, xV, yV){
    const addImg= document.createElement('img')
    const placeToAppend= document.getElementById('container')
    addImg.setAttribute('src', img1)
    addImg.width = 50
    addImg.height = 50
    addImg.style.position = 'absolute'
    addImg.style.left = xPos + 'px'
    addImg.style.top = yPos + 'px'
    console.log(addImg + "kkkkkkkkkkk")
    pacArr.push(addImg)
    xPosition.push(xPos)
    yPosition.push(yPos)
    xVelocity.push(xV)
    yVelocity.push(yV)
    placeToAppend.appendChild(addImg)
    }

function pacmenFactory(){
    let x = 110 + Math.floor(Math.random() * 600);
    let y = 110 + Math.floor(Math.random() * 200);
    let xV = Math.floor(Math.random()*7)
    let yV = Math.floor(Math.random()*4)
  addPacmen(imgArr[0], x, y,xV, yV)  

}
const browserWidth = window.innerWidth
const place= document.getElementById('container')
const w = place.clientWidth
const h = place.clientHeight
console.log(w + "kkkkkkk")
console.log(h)

function checkWalls(i){
    //browserWidth - imgCurrentPos <= imgWidth)
    // if(xPosition[i]-100 >= browserWidth || xPosition[i]-100 <0){
    //     xVelocity[i] *= -1                    
    // }
    // if(yPosition[i]-100 >= browserWidth || yPosition[i]-100 <0){
    //     yVelocity[i] *= -1                    
    // }
    if(xPosition[i]-50 >= 740){  //w
       // direction=1; focus=1;
        pacArr[i].setAttribute('src', imgArr[1])
        xVelocity[i] *= -1     
        xPosition[i] = 740 - 50              
    }
    if(xPosition[i]-50 <0){
        direction=1; focus=1;
        pacArr[i].setAttribute('src', imgArr[0])
        xVelocity[i] *= -1  
        xPosition[i] = 50                  
    }
    if(yPosition[i]-50 >= 330 ){ //h
       // pacArr[i].setAttribute('src', imgArr[1])
        yVelocity[i] *= -1 
        yPosition[i] = 330                    
    }
    if(yPosition[i]-50 <0){
       // pacArr[i].setAttribute('src', imgArr[0])
        yVelocity[i] *= -1                    
    }
    // if(xPosition[i]-100 >= 1300 || xPosition[i]-100 <=0){
    //     xVelocity[i] *= -1                    
    // }
    // if(yPosition[i]-100 >= 550 || yPosition[i]-100 <=0){
    //     yVelocity[i] *= -1                    
    // }
}
function handleClick(e) {
    for(let i = 0; i < pacArr.length; i++) {
        let img = pacArr[i].getAttribute('src')
        if(img == imgArr[1]){
            yVelocity[i]+= -5;
        }
        if(img == imgArr[0]){
            //yVelocity[i]+= -3;
            xVelocity[i]+= -8;
        }
      // y[i] += -75;
    }
}

function update() {
    for (let i = 0; i < pacArr.length; i++) {
            xPosition[i] += xVelocity[i]
            yPosition[i] += yVelocity[i]
            checkWalls(i)
            pacArr[i].style.left = xPosition[i] + 'px'
            pacArr[i].style.top = yPosition[i] + 'px'
            if(counter===2000) {
                reset();
                break;
            }      
    }
    counter += 1;
    if (!stop)
        setTimeout(update, 10);
}
//setInterval(update, 10)

function reset() {
    let containerE = document.getElementById('container');
    containerE.innerHTML="";
    pacArr=[];
    xPosition=[];
    yPosition=[];
    xVelocity=[];
    yVelocity=[];
    counter=0;
    stop = true;
}