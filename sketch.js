let counterN = 0;
let result; 
function preload() {
    result = loadStrings('switch.txt');
  }
function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    //console.log(counterN)
    if(counterN > 3000){
        result = loadStrings('switch.txt');
        counterN = 0
    }
    let j = 32;
    for(let i = 0; i < result.length; i++){
        fill(0, 200, 150);
        //console.log(result[i])
        textSize(32);
        text(result[i], 10, j);
        j = j + 32;
    }
    counterN++;
}