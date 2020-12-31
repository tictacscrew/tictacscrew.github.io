var b = [];
var t=1;
var ps=1;
var a =1000;
var aa= 1000;
var sx = 5;
var sy = 5;

function setup() {
  b = createArray(sx,sy); 
  for(var i=0;i<b.length;i++){for(var j=0;j<b[0].length;j++){b[i][j]=0}}
  createCanvas(b.length*100+20, b.length[0]*100+20);
  textSize(80);
  textAlign(CENTER);
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function draw() {
  background(0);
  noStroke();
  fill(150)
  rect(0,0,b.length*100+20,b[0].length*100+20);
  for(var i =0;i<b.length;i++){
    for(var j=0;j<b[i].length;j++){
      fill(127);
      circle(i*100+60,j*100+60,90);
      p = b[i][j];
      fill(0)
      
      if(p!=0){text(String.fromCharCode(87+p),i*100+60,j*100+90)}
    }
  }
}

function mousePressed() {
  aa = frameCount
  if(abs(aa-a)<100){alert("fridgr")}else{
  xx = floor(map(mouseX,0,b.length*100+20,0,b.length));
  yy = floor(map(mouseY,0,b[0].length*100+20,0,b[0].length));
  
  if(b[xx][yy]==0){if(t>ps){t=1}
  else{t++}
  b[xx][yy]=t;
  }
  else{alert("gop back")}}
  a=frameCount;
}
