var balls = document.getElementsByClassName("ball");
let points =[]
reversing = false

async function reverse (){
  let point = points.pop();
  console.log(point.x)
  for (let i = 0; i < 2; i++) {
    balls[i].style.left = point.x;
    balls[i].style.top = point.y;
    balls[i].transform = "translate(-" + point.x + ",-" + point.y + ")";
  }
  if (points.length > 0) setTimeout(reverse, 10)
  else {
    reversing = false
    let pElement = document.getElementById('para-1')
    pElement.remove()
  }
}
//document.onmousemove = () => {
function move(e){
  if (reversing) {
    return
  }
  if(points.length >= 300){
    reversing = true
    reverse()
    var z = document.createElement('p');
    z.setAttribute('id','para-1');
    z.innerHTML = "Stop moving curser and watch!!"
    document.body.appendChild(z)
    return
  }
  var x = (e.clientX * 100) / window.innerWidth + "%"; 
  var y = (e.clientY * 100) / window.innerHeight + "%";
  let obj = {x:x, y:y}
  points.push(obj)
  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = "translate(-" + x + ",-" + y + ")";
  }
};