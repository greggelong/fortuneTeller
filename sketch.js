let colorSelector, numberSelector, speakButton;
let selectedColor = 'red';
let selectedNumber = 1;
let speech;
let img;
let fortunes = [
  "You will meet a new friend soon!",
  "Something nice will happen today!",
  "You will learn something fun!",
  "Someone will say something kind to you.",
  "You will do well on your next test!",
  "This weekend will be exciting!",
  "You will have a lot of fun tomorrow.",
  "A good chance will come soon!",
  "You will forget where you put your homework!",
  "You will trip over your own shoelaces today.",
  "You will get a funny text from a friend.",
  "Your favorite snack will disappear tomorrow!",
  "You will laugh so hard, your stomach will hurt!",
  "You will find something you thought you lost.",
  "You will make a silly mistake in class but laugh about it!",
  "You will forget your backpack but remember later!"
];

function preload(){
    img = loadImage("coot.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  angleMode(DEGREES)

  // Initialize speech synthesis
  speech = new p5.Speech();

  // Create a dropdown for selecting a color
  colorSelector = createSelect();
  colorSelector.option('red');
  colorSelector.option('yellow');
  colorSelector.option('blue');
  colorSelector.option('green');
  colorSelector.changed(updateColor);
  colorSelector.position(10, 10); // Positioning the dropdown
  colorSelector.style('font-size', '20px');
  colorSelector.style('width', '150px');
  colorSelector.style('height', '40px');
  colorSelector.style('padding', '5px');
  
  // Create a dropdown for selecting a number (1-4)
  numberSelector = createSelect();
  for (let i = 1; i <= 8; i++) {
    numberSelector.option(i);
  }
  numberSelector.changed(updateNumber);
  numberSelector.position(10, 60);
  numberSelector.style('font-size', '20px');
  numberSelector.style('width', '150px');
  numberSelector.style('height', '40px');
  numberSelector.style('padding', '5px');
  
  // Create a "Speak Fortune" button
  speakButton = createButton('Speak Fortune');
  speakButton.position(200, 10);
  speakButton.style('font-size', '20px');
  speakButton.style('width', '200px');
  speakButton.style('height', '50px');
  speakButton.mousePressed(speakFortune);
}

function draw() {
  background(255);
  
  // Display the chosen color
  fill(selectedColor);
  push()
  translate(width/2,height/2);
  rotate(frameCount)
  image(img,0,0)
  pop()
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Selected Color: " + selectedColor, width / 2, height / 2 - 40);
  
  // Display the chosen number
  fill(0);
  text("Selected Number: " + selectedNumber, width / 2, height / 2 + 40);
}

// Update color when user selects a new color
function updateColor() {
  selectedColor = colorSelector.value();
}

// Update number when user selects a new number
function updateNumber() {
  selectedNumber = numberSelector.value();
}

// Speak a random fortune from the array
function speakFortune() {
  let fortuneIndex 
  // forutune is number 
  if(selectedColor ==="red" || selectedColor ==="yellow"){
    fortuneIndex = floor(random(8))  // 0 to 7
  }else{
    fortuneIndex = floor(random(8,16)) // 8 to 15  index
  }
  //let randomFortune = random(fortunes); // Pick a random fortune
  let randomFortune = fortunes[fortuneIndex]
  speech.speak(randomFortune); // Speak the fortune
}
