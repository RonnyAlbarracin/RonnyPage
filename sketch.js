let t = 2; // time variable

function setup() {
  createCanvas(700, 500);
 

 
    button = createButton('openprossesing');
  button.position(115, 240);
  button.mousePressed(changeBG);
  
   button2 = createButton('photoshop');
   button2.position(315, 240);
  button2.mousePressed(changeBG);
  
  
   button3 = createButton('informacion');
   button3.position(480, 240);
  button3.mousePressed(changeBG);
  
}

function draw() {
background(255); 
      

  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      
      const angle = xAngle * (x / width) + yAngle * (y / height);

      
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);
      
      
     fill(102,25,255);
      ellipse(myX, myY, 5); // draw particle
      noStroke();
    }
  }
  t = t + 0.01; // update time
  fill(65);
  rect(100,100,500,500,15);
 fill(229,43,80)
   rect(100,225,500,50);
   fill(65,230,250);
  ellipse(350,100,200,200);
  
  
  
 // text('Persona responsable, organizado, cumplidor de las labores asignadas, excelentes relaciones personales y gran facilidad para trabajar en grupo o de forma individual, compromiso empresarial. Grandes proyecciones a nivel profesional y personal, compromiso con mis funciones y siempre dispuesto a colaborar', 5, 30);
  
    
}


function changeBG() {
window.open('https://www.openprocessing.org/sketch/551143');
  
}

function changeBG2() {
  var val = random(255);
  background(val);
}

function changeBG2() {
  var val = random(255);
  background(val);
}



