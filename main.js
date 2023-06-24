let Fcolors1 =['#C2F970', '#f49097','#96F970','#EAA1C6','#FFB700']
let Fcolors2 = ['#96F970', '#EAA1C6','#C2F9C8','#dfb2f4','#FFD887']
let Fcolors3 = ['#C2F9C8', '#dfb2f4','#C2F970','#f49097','#FFFEB0']
let Finteractioncolor = ['#FF998D', '#f5e960','#dfb2f4','#f2f5ff','#FFC5E3']
let Aeyebrowcolor = ['#96F970', '#f49097','#f5e960','#f2f5ff','#FFC5E3']
let Amousecolor = ['#FF998D', '#f5e960','#EAA1C6','#f5e960','#FF998D']
let Atonguecolor = ['#C3F9E8','#f2f5ff','#C2F9C8','#dfb2f4','#FFFEB0']
let	Carccolor1 = ['#C3F9E8','#f2f5ff','#EAA1C6','#dfb2f4','#FF998D']
let Carccolor2 = ['#FF998D', '#f5e960','#C2F970','#f5e960','#FFC5E3']
let Cellipsecolor = ['#C2F9C8', '#dfb2f4','#f2f5ff','#f49097','#f2f5ff']
let Ecolor1 =['#FF998D','#dfb2f4','#EAA1C6','#f5e960','#FF998D']
let Ecolor2 = ['#EAA1C6','#EA65D8','#E8FFA5','#FDA947','#FF7868']
let Ecolor3 = ['#C2F970','#EAA1C6','#96F970','#EAA1C6','#FFB700']
let Ecolor4 = ['#50DD18','#C7506E','#50DD18','#B9629E','#FFFEB0']
let Ecolor5 = ['#C3F9E8','#f49097','#C2F970','#f2f5ff','#FFD887']

let colorIndex = 0;

let slider_starfr;
let slider_starfr_value = 0;
let slider_circle;
let slider_circle_value = 0;


let colorPicker;

let charactercolor = ['#FF7E6B', '#E74574', '#ebe34a', '#7FDB69', '#70DBDE', '#C275C5']
let randomIndex = 0;
let shapeIndex = 0;
let faceshapeIndex = 0;
let mouseshapeIndex = 0;

let mySound1;

let sceneIndex = 1;

function preload(){
	soundFormats('mp3','ogg');
	mySound1 = loadSound('click_sound.mp3');
}

function setup() {
  createCanvas(850, 840);
  background(0);
  angleMode(DEGREES);
	
	//메뉴버튼
	btn1 = createButton('Scene 1');
	btn1.position(5, 0);
	btn1.mousePressed(scene1);
	btn1.id('menu');

	btn2 = createButton('Scene 2');
	btn2.position(70, 0);
	btn2.mousePressed(scene2);
	btn2.id('menu');
	
	//씬1 슬라이더 생성
	slider_starfr = createSlider(1, 10, 5);
	slider_starfr.position(12, height-150);
	slider_circle = createSlider(0,12,12);
	slider_circle.position(12, height-110);
	
	//씬1 컬러피커 생성
	colorPicker = createColorPicker('#000000');
  colorPicker.position(55, 515);
	
	//씬1 버튼 생성
	facebutton = createImg('whitebutton.png','✿');
	facebutton.size(50,50);
  facebutton.position(25, 95);
  facebutton.mousePressed(changeFace);
	
	facebutton2 = createImg('whitebutton.png','✿');
	facebutton2.size(50,50);
  facebutton2.position(85, 95);
	facebutton2.mousePressed(changeMouse);
	
	chabutton = createImg('whitebutton.png','✿');
	chabutton.size(50,50);
  chabutton.position(55, 240);
  chabutton.mousePressed(changeCharacterColor);
	
	chashapebutton = createImg('whitebutton.png','✿');
	chashapebutton.size(50,50);
  chashapebutton.position(55, 385);
  chashapebutton.mousePressed(changeCharacterShape);
}

function scene1() {
  setupScene1();
  sceneIndex = 1;
}
function scene2() {
  setupScene2();
  sceneIndex = 2;
}

function draw() {
	  switch(sceneIndex) {
   case 1:
     drawScene1();
     break;
   case 2: 
     drawScene2();
     break;
 }
}