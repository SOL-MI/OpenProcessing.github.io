// 참고 예제: https://p5js.org/ko/examples/dom-video-pixels.html
// https://p5js.org/ko/examples/dom-video-capture.html

let webcam;

function setupScene2() {
	//rectMode(CENTER);

	webcam = createCapture(VIDEO);
  webcam.size(width, height);
	webcam.hide();
}

function drawScene2() {
	background(0);
	
	webcam.loadPixels();
	webcam.updatePixels();
	
	for (let y = 0; y < webcam.height; y = y + 70) {
    for (let x = 0; x < webcam.width; x = x + 70) {
			let pixel_index = (y * webcam.width + x) * 4;
      let darkness = (255 - webcam.pixels[pixel_index]) / 255;

			push();
			translate(x, y);
			if(darkness > 0.8) {
				push();
				//scale(0.2);
				fill(darkness*255,100,150);
				ellipse(0,0,40,40);
				pop();
			}
			if(darkness <= 0.8 && darkness >= 0.5) {
				// ellipse(0, 0, 지름, 지름);
				push();
				//scale(0.1);
				fill(darkness*255, 210, 100,90);
				ellipse(0,0,20,20,1800);
				pop();
			}
			if(darkness < 0.5) {
				fill(darkness*100, 230,30,50);
				ellipse(0,0,20,20,-90);
			}
			pop();
		}
	}
}
