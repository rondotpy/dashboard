var branch;

function setup() {
    createCanvas(windowWidth, windowHeight);
    branch = loadJSON("Branch.json")
}
function draw() {
    background(0)
    fill(255)
    text(branch.swtMER01, 10, 50)
    console.log(branch.swtMER01)
}