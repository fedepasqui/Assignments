function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);

  rotateX(60);

  noFill();
  stroke(255);

  for (var i = 0; i < 40; i++) {
    var r = map(sin(frameCount / 2), -1, 1, 100, 200);
    var g = map(i, 0, 20, 100, 200);
    var b = map(cos(frameCount), -1, 1, 200, 100);

    stroke(r, g, b);

    rotate(frameCount / 50);

    beginShape();
    for (var j = 0; j <= 360; j += 60) {
      var rag = i * 8;
      var x = rag * cos(j);
      var y = rag * sin(j);
      var z = sin(frameCount * 1.5 + i * 10) * 50;

      vertex(x, y, z);
    }
    endShape(close);
  }
}
