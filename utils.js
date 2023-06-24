function translate_guide(x, y) {
	translate(x, y);
	
	// 해당 x, y 좌표 위치에 핑크색 원을 표시한다.
	push();
	stroke('pink');
	fill('pink');
	ellipse(0, 0,  10, 10);
	pop();
}
function rect_guide(x, y, w, h, tl, tr, bl, br){
	rect(x, y, w, h, tl || 0, tr || 0, bl || 0, br || 0);
	
	// 해당 x, y 좌표 위치에 노랑색 원을 표시한다.
	// rectMode에 따라서, x, y 위치가 사각형의 중앙이거나 왼쪽 모서리일 것이다.
	push();
	stroke('red');
	fill('red');
	ellipse(x, y, 15, 15);
	pop();
}

function arc_guide(x, y, w, h, start, stop, mode, detail){
	arc(x, y, w, h, start, stop, mode || null, detail || null);
	
	push();
	stroke('yellow');
	fill('yellow');
	ellipse(x, y, 5, 5);
	pop();
}

function ellipse_guide(x, y, w, h) {
	ellipse(x, y, w, h);
	
	push();
	stroke('yellow');
	fill('yellow');
	ellipse(x, y, 5, 5);
	pop();
}

function drawGrid(gap){
	push();
	strokeWeight(0.5);
	stroke(200);
	for(let x = 0; x <= width; x = x+gap) {
		line(x, 0, x, height);
	}
	
	for(let y = 0; y <= height; y = y+gap) {
			line(0, y, width, y);
	}
	pop();
}

function showCoordinateNum(){
	push();
	stroke("red");
	fill("red");
	textSize(20);
	text(`x: ${mouseX}, y: ${mouseY}`, 10, height-30);
	pop();
}
