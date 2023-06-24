function myLetterF(colorIndex){
	noStroke();
	//세로
	fill(Fcolors1[colorIndex]);
	rect(0, 0, 40, 140, 20, 0, 10, 10);
	//가로 위
	fill(Fcolors2[colorIndex]);
	rect(40, 0, 60, 20, 0, 5, 5, 0);
	//가로 아래
	fill(Fcolors3[colorIndex]);
	ellipse(70, 60, 30, 30);
}

function myLetterFinteraction(){
		beginShape();	
		vertex(15, 0);
		vertex(20, 10);
		vertex(30, 15);
		vertex(20, 20);
		vertex(15, 30);
		vertex(10, 20);
		vertex(0, 15);
		vertex(10, 10);
		endShape(CLOSE)
}

function myLetterA(whiteeyediameter,blackeyeW,blackeyeH){
	push()
	//let whiteeyediameter = 30;
		//eye (흰자)
		push();
		stroke('rgba(0,0,0,0.27)');
		strokeWeight(1);
		fill(255,255,255);
		ellipse(55,40, whiteeyediameter, 45);
		ellipse(85,40, whiteeyediameter, 45);
		pop();

		//eye (동공)	
		let blackeyemx1 = map(mouseX, 0, width, -13, 0);
		let blackeyemx2 = map(mouseX, 0, width, 0, 13);
		let blackeyemy1 = map(mouseY, 0, height,-10, 10 );
		push();
	
		//별모양 동공
		push();
			if (mouseIsPressed === true) {
			fill(0,0,0);
		} else {
			scale(0,0);
		}
			translate(40,25+blackeyemy1);
			myLetterFinteraction();
			translate(30,0);
			myLetterFinteraction();
			pop();
	
		//동그라미 동공
			push();
			noStroke();
			if (mouseIsPressed === true) {
			scale(0,0);
			} else {
			fill(0,0,0);
			
		}
				push();
				translate(blackeyemx1, blackeyemy1);
				ellipse(62,40, blackeyeW, blackeyeH);
				pop();

				push();
				translate(blackeyemx2, blackeyemy1);
				ellipse(78,40, blackeyeW, blackeyeH);
				pop();
			pop();
	
	pop();

	
		let eyebrowmy = map(mouseY,0, height,-5,0);
		//eyebrow
		push();
		noStroke();
		fill(Aeyebrowcolor[colorIndex]);
		translate(30,eyebrowmy);
		triangle(27,0, 17, 10, 37, 10);
		triangle(52,0, 42, 10, 62, 10);
		pop();	
	
		//mouth
		push();
		noStroke();
		fill(Amousecolor[colorIndex]);
		//동그라미 입 : ellipse(240,160, 110, 60);
		//부드러운 네모 입 : rect(185, 130, 110, 60, 120, 120, 10, 10);
		//반원모양 입으로 결정!
		arc(70, 135, 135, 125, 180, 360);

			//tongue
		fill(Atonguecolor[colorIndex]); //EC4C94
		arc(70, 135, 70, 70, 180, 360);
		pop();
	pop();
}

function myLetterC(){
	let degree = map(mouseX, 0, width, 0, 360);
	
	noStroke();
	fill(Carccolor1[colorIndex]);
	arc(70, 70, 140, 140, 90, 270);
	fill(Carccolor2[colorIndex]);
	arc(70, 70, 60, 60, 90, 270);
	//rect(400,60,40, 40, 0,50, 50, 0);
	//rect(400,160,40, 40, 0,50, 50, 0);
	fill(Cellipsecolor[colorIndex]);
	ellipse(90, 20, 40, 40);
	ellipse(90, 120, 40, 40);
	//ellipse(90, 20, mouseX, mouseY);
	
	//인터랙션을 위한 arc
	fill(Carccolor2[colorIndex]);
	arc(90,20,40,40,0,degree);
	translate(90,120);
	rotate(100);
	arc(0,0,40,40,0,degree);
}

function myLetterE(){
	noStroke();
	fill(Ecolor1[colorIndex]);
	triangle(0,0, 0, 50, 100, 50);
	
	fill(Ecolor3[colorIndex]);
	triangle(0,43, 0, 93, 100, 93);

	fill(Ecolor2[colorIndex]);
	triangle(0, 43, 0, 50, 14 ,50);
	
	fill(Ecolor5[colorIndex]);
	triangle(0,87, 0, 140, 100, 140);
	
	fill(Ecolor4[colorIndex]);
	triangle(0,87,0,93,14,93);
}

function myCursorDeco(){
	noStroke();
	fill('#FBFF0072');
	ellipse(0,0,30,30);
}

function myCircle() {
		for(let x = 0; x < 50; x = x + 10) {
			push();
			noFill();
			stroke(255);
			ellipse(0, 0, x, x);
			pop();
		}
}

function myCharacter1(colIndex) {
	push();
	fill(charactercolor[colIndex]);
	//기본 얼굴 main face
	push();
	translate(300,570);
	ellipse(0,0,370,340);
	pop();
	//왼쪽귀 left ear
	push();
	rotate(sin(frameCount*3+mouseX/20));
	translate(140,520);
	beginShape();
	curveVertex(0,0);
	curveVertex(0,0);
	curveVertex(-40,-130);
	curveVertex(30,-200);
	curveVertex(100,-150);
	curveVertex(140,0);
	curveVertex(140,0);
	endShape();
	pop();
	//오른쪽귀 right ear
	push();
	rotate(-sin(frameCount*3+mouseX/20));
	translate(300,520);
	beginShape();
	curveVertex(0,0);
	curveVertex(0,0);
	curveVertex(40,-150);
	curveVertex(110,-200);
	curveVertex(180,-130);
	curveVertex(140,0);
	curveVertex(140,0);
	endShape();
	pop();
	pop();
}

function myCharacter2(colIndex){
	push();
	fill(charactercolor[colIndex]);
	//기본 얼굴 main face
		push();
		translate(300,570);
		ellipse(0,0,370,340);
		pop();
	//위쪽 귀들 
		push();
		translate(-sin(frameCount*3+mouseX/40)*8,sin(frameCount*3+mouseX/40)*8);
		translate(230,450);
		arc(0,0,130,300,180,360);
		translate(130,0);
		arc(0,0,130,300,180,360);
		pop();
		//좌측 귀들
		push();
		translate(230,470);
		arc(0,0,400,100,90,270);
		translate(0,85);
		arc(0,0,400,100,90,270);
		pop();
		//우측 귀들
		push();
		translate(380,470);
		arc(0,0,400,100,-90,90);
		translate(0,85);
		arc(0,0,400,100,-90,90);
		pop();
	pop();
}

function myCharacter3(colIndex){
	push();
		fill(charactercolor[colIndex]);
		//모자
		push();
			translate(310,290);
			translate(0,sin(frameCount*6+mouseX/40)*9);
			triangle(0,0,100,160,-100,160);
		pop();
		//얼굴
		push();
			translate(150,440);
			rect(0,0,310,100,50,50,50,50);
			translate(0,100);
			rect(0,0,310,100,50,50,50,50);
			translate(0,100);
			rect(0,0,310,100,50,50,50,50);
		pop();
	pop();
}

function myCharacter4(colIndex){
	push();
		fill(charactercolor[colIndex]);
		push();
			translate(210,390);
			//몸통
			rect(0,0,210,370,0,0,0,100);
			//위에 튀어나온 거
			rect(110,-70,100,70,70,70,0,0);
			//입
			rect(-120,0,120,100,80,0,0,20);
			push();
				translate(0,sin(frameCount*3+mouseX/20)*15);
				rect(-110,115,120,80,20,0,0,100);
			pop();
			//꼬리
			rect(210,250,90,120,0,50,50,0);
		pop();
	pop();
}

function eye1(){
	push();
	translate((width-160)/3+20,height/2+80);
	let eye1mx = map(mouseX, 0, width, -3, 3);
	let eye1my = map(mouseY, 0, height,-3, 3);
	translate(eye1mx, eye1my);
	//눈 검은부분
	push();
	fill(0);
	ellipse(0,0,40,70);
	translate(100,0);
	ellipse(0,0,40,70);
	pop();
	//눈 흰색 부분
	push();
	translate(10,-15);
	fill(255);
	ellipse(0,0,10,20);
	translate(100,0);
	ellipse(0,0,10,20);
	pop();
	pop();
}

function eye2(){
	push();
		translate((width-160)/3-10,height/2+50);
		//별모양 눈
		push();
		fill(0);
		let eye2mx = map(mouseX, 0, width, -3, 3);
		let eye2my = map(mouseY, 0, height,-3, 3);
		translate(eye2mx, eye2my);
		scale(2,2.5);
		myLetterFinteraction();
		translate(50,0);
		myLetterFinteraction();
		pop();
	pop();
}

//우는 눈모양
function eye3(){
	push();
	fill(0);
	translate(210,500);
	let eye3mx = map(mouseX, 0, width, -3, 3);
	let eye3my = map(mouseY, 0, height,-3, 3);
	translate(eye3mx, eye3my);
	//왼쪽 눈
	push();
	rect(0,0,70,16,20,20,20,20);
	translate(27,0);
	rect(0,0,16,70,20,20,20,20);
	pop();
	//오른쪽 눈
	push();
	translate(110,0);
	rect(0,0,70,16,20,20,20,20);
	translate(27,0);
	rect(0,0,16,70,20,20,20,20);
	pop();
	pop();
}

function mouse1(){
	push();
		let mousemove = sin(frameCount*15) *5;
		translate((width-160)/3+30,height/2+130);
		translate(0,mousemove);
		push();
		fill(0);
		rect(0,0,90,50,100,100,100,100);
		pop();
	pop();
}

function mouse2(){
	push();
	fill(0);
	let mousemove = sin(frameCount*15) *4;
	translate((width-160)/3+70,height/2+130);
	translate(0,mousemove);
	ellipse(0,0,25,40);
	pop();
}

function mouse3(){
	push();
	fill(0);
	let mousemove = sin(frameCount*15) *4;
	translate((width-160)/3+70,height/2+130);
	translate(0,mousemove);
	arc(0,0,100,110,0,180);
	pop();
}