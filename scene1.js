function setupScene1() {

	
}

function changeFace(){
	mySound1.play();
	faceshapeIndex++;
	faceshapeIndex = faceshapeIndex%3;
}

function changeMouse(){
	mySound1.play();
	mouseshapeIndex++;
	mouseshapeIndex = mouseshapeIndex%3;
}

function changeCharacterColor(){
	mySound1.play();
	randomIndex = Math.round(random(charactercolor.length-1)); //0~5까지 숫자중 랜덤. 전역변수로서 사용할땐 int랑 random사용불가.
	
	switch(randomIndex){
		case 0:
			colorIndex = 0;
			break;
		case 1:
			colorIndex = 1;
			break;
		case 2:
			colorIndex =4;
			break;
		case 3:
			colorIndex = 2;
			break;
		case 4:
			colorIndex = 0;
			break;
		case 5:
			colorIndex = 3;
			break;
	}
}

function changeCharacterShape(){
	mySound1.play();
	shapeIndex++;
	shapeIndex = shapeIndex%4;
}

function drawScene1() {
	let degree = map(mouseX, 0, width, 0, 360);
	
  background(colorPicker.color());
  noStroke();
	
	/*배경 효과 관련 코드 draw하는 코드 들어갈 곳!!!!!!*/
	
	//조작하는 곳
	push();
	fill(255);
	rect(0,0,160,height);
	//showCoordinateNum();  // 마우스 현재 위치 좌표값
	pop();
	
	//설명
	push();
	fill(0);
	translate(20,70);
	textSize(17);
	text('* FACE', 0, 0);
	translate(0,120);
	text('* CHARECTER',0,0);
	translate(0,20);
	text('   COLOR',0,0);
	translate(0,120);
	text('* CHARECTER',0,0);
	translate(0,20);
	text('   SHAPE',0,0);
	translate(0,130);
	text('* BG COLOR',0,0);
	pop();
	
	push();
	translate(190,0);
	MainSketch();
	pop();
	
	//cursor 꾸미기
	push();
	translate(mouseX, mouseY);
	myCursorDeco();
	pop();
}

function MainSketch(){
	//알파벳 F
	push();
	translate(60,60);
	myLetterF(colorIndex);
	pop();
	
	//F에 나타나는 별
	push();
	if (mouseIsPressed === true) { //keyIsDown(UP_ARROW)
    fill(Finteractioncolor[colorIndex]);
  } else {
    fill(Fcolors3[colorIndex]); //배경색과 같게 해서 안보이게 만듦.
  }
	translate(115,105);
  myLetterFinteraction();
	pop();
	
	// 알파벳 A
	push();
	translate(170, 65);
	myLetterA(30,16,24);
	pop();
	
	//알파벳 C
	push();
	translate(330,60);
	myLetterC();
	pop();
	
	//알파벳 E
	push();
	translate(477,60);
	myLetterE();
	pop();
	
	//상단 원
	slider1_circle_value = slider_circle.value();
	push();
	translate(15,0);
		push();
		for(let x =0; x<slider1_circle_value; x=x+1){
			translate(50,0);
			myCircle();
		}
		pop();
		push();
		translate(600,0);
		for(let x =0; x<slider1_circle_value; x=x+1){
			translate(-50,0)
			myCircle();
		}
		pop();
	pop();
				
	//움직이는 배경 별 (순서대로 작은별, 큰별)
	slider1_starfr_value = slider_starfr.value();
	push();
		for(let x = 0; x < 5; x=x+1) {
			push();
			frameRate(slider1_starfr_value);
			translate(random(0, 640), random(0, height));
			fill(Finteractioncolor[colorIndex]) ;
			scale(0.5,0.6);
			myLetterFinteraction();
			pop();
		}
		for(let x = 0; x < 5; x=x+1) {
			push();
			frameRate(slider1_starfr_value);
			translate(random(0, 640), random(0, height));
			fill(Fcolors3[colorIndex]);
			scale(0.8,1);
			myLetterFinteraction();
			pop();
		}
	pop();
	
	//캐릭터 얼굴형 바뀌기
	push();
	 switch(shapeIndex){
	 case 0:
	 myCharacter1(randomIndex);
	 break;
	 case 1:
	 myCharacter2(randomIndex);
	 break;
	 case 2:
	 myCharacter3(randomIndex);
	 break;
	 case 3:
	 myCharacter4(randomIndex);
	}
	pop();
	
	//눈모양 바뀌기
	push();
	switch(faceshapeIndex){
	case 0:
		if(shapeIndex==3){
			push();
			translate(10,-30);
			eye1();
			pop();
		}else{
			eye1();};
			break;
	case 1:
		if(shapeIndex==3){
			push();
			translate(10,-30);
			eye2();
			pop();
		}else{
			eye2();}
			break;
		case 2:
			if(shapeIndex==3){
				push();
				translate(10,-30);
				eye3();
				pop();
			}else{
				eye3();
			}break;
	}
	pop();
	
	//입 버튼 누를시 입모양 바뀌기
	push();
	switch(mouseshapeIndex){
		case 0:
			if(shapeIndex==0||shapeIndex==1||shapeIndex==2){
				mouse1();
			}
			break;
		case 1:
			if(shapeIndex==0||shapeIndex==1||shapeIndex==2){
				mouse2();
			}
			break;
		case 2:
			if(shapeIndex==0||shapeIndex==1||shapeIndex==2){
				mouse3();
			}
			break;
	}
	pop();
	//eye3();
	//mouse1();
}

//이미지 저장
function keyPressed(){
	if (key=="s"){
		save()
	}
}