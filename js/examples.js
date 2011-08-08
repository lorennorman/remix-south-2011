var examples =
{ basicRectangles: 'ctx.fillRect(25,25,100,100);\n\
ctx.clearRect(45,45,60,60);\n\
ctx.strokeRect(50,50,50,50);'

, coloredRectangles: 'ctx.fillStyle = "rgb(200,0,0)";\n\
ctx.fillRect (100, 60, 250,250);\n\
\n\
ctx.strokeStyle = "rgba(0, 0, 200, 0.5)";\n\
ctx.strokeRect (200, 160, 250, 250);'

, paths: 'ctx.beginPath();\n\
ctx.moveTo(25,25);\n\
ctx.lineTo(105,25);\n\
ctx.lineTo(25,105);\n\
ctx.fill();\n\
\n\
ctx.beginPath();\n\
ctx.moveTo(125,125);\n\
ctx.lineTo(125,45);\n\
ctx.lineTo(45,125);\n\
ctx.closePath();\n\
ctx.stroke();'

, arcs: 'for(var i=0;i<4;i++){\n\
  for(var j=0;j<3;j++){\n\
    ctx.beginPath();\n\
    var x              = 25+j*50;\n\
    var y              = 25+i*50;\n\
    var radius         = 20;\n\
    var startAngle     = 0;\n\
    var endAngle       = Math.PI+(Math.PI*j)/2;\n\
    var anticlockwise  = i%2==0 ? false : true;\n\
\n\
    ctx.arc(x,y,radius,startAngle,endAngle, anticlockwise);\n\
\n\
    if (i>1){\n\
      ctx.fill();\n\
    } else {\n\
      ctx.stroke();\n\
    }\n\
  }\n\
}'

, arcSmiley: 'ctx.beginPath();\n\
ctx.arc(75,75,50,0,Math.PI*2,true);\n\
ctx.fillStyle = "yellow";\n\
ctx.fill();\n\
\n\
ctx.moveTo(110,75);\n\
ctx.arc(75,75,35,0,Math.PI,false);\n\
ctx.moveTo(65,65);\n\
ctx.arc(60,65,5,0,Math.PI*2,true);\n\
ctx.moveTo(95,65);\n\
ctx.arc(90,65,5,0,Math.PI*2,true);\n\
ctx.stroke();'

, quadratic: 'ctx.beginPath();\n\
ctx.moveTo(75,25);\n\
ctx.quadraticCurveTo(25,25,25,62.5);\n\
ctx.quadraticCurveTo(25,100,50,100);\n\
ctx.quadraticCurveTo(50,120,30,125);\n\
ctx.quadraticCurveTo(60,120,65,100);\n\
ctx.quadraticCurveTo(125,100,125,62.5);\n\
ctx.quadraticCurveTo(125,25,75,25);\n\
ctx.stroke();'

, bezier: '// Bezier curves example\n\
ctx.fillStyle = "#C00"\n\
ctx.beginPath();\n\
ctx.moveTo(75,40);\n\
ctx.bezierCurveTo(75,37,70,25,50,25);\n\
ctx.bezierCurveTo(20,25,20,62.5,20,62.5);\n\
ctx.bezierCurveTo(20,80,40,102,75,120);\n\
ctx.bezierCurveTo(110,102,130,80,130,62.5);\n\
ctx.bezierCurveTo(130,62.5,130,25,100,25);\n\
ctx.bezierCurveTo(85,25,75,37,75,40);\n\
ctx.fill();'

, fonts: '// font example\n\
ctx.fillStyle = "blue";\n\
ctx.font="24pt Helvetica";\n\
ctx.fillText("Figure 1", 10, 50);\n\
\n\
ctx.fillStyle = "red";\n\
ctx.font="18pt Times New Roman";\n\
ctx.fillText("Figure 2", 10, 100);\n\
\n\
ctx.fillStyle = "green";\n\
ctx.font="36pt Monaco";\n\
ctx.fillText("Figure 1", 10, 175);'

, image: '// rhino\n\
var rhino = $("#rhino")[0];\n\
\n\
ctx.drawImage(rhino, 100, 100);'

, complex: '// pacman\n\
function roundedRect(ctx,x,y,width,height,radius){\n\
  ctx.beginPath();\n\
  ctx.moveTo(x,y+radius);\n\
  ctx.lineTo(x,y+height-radius);\n\
  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);\n\
  ctx.lineTo(x+width-radius,y+height);\n\
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);\n\
  ctx.lineTo(x+width,y+radius);\n\
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);\n\
  ctx.lineTo(x+radius,y);\n\
  ctx.quadraticCurveTo(x,y,x,y+radius);\n\
  ctx.stroke();\n\
}\n\
\n\
roundedRect(ctx,12,12,180,180,15);\n\
roundedRect(ctx,19,19,180,180,9);\n\
roundedRect(ctx,53,53,49,33,10);\n\
roundedRect(ctx,53,119,49,16,6);\n\
roundedRect(ctx,135,53,49,33,10);\n\
roundedRect(ctx,135,119,25,49,10);\n\
\n\
ctx.beginPath();\n\
ctx.fillStyle = "yellow"\n\
ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false);\n\
ctx.lineTo(31,37);\n\
ctx.fill();\n\
ctx.fillStyle = "white"\n\
for(var i=0;i<8;i++){\n\
  ctx.fillRect(51+i*16,35,4,4);\n\
}\n\
for(i=0;i<6;i++){\n\
  ctx.fillRect(115,51+i*16,4,4);\n\
}\n\
for(i=0;i<8;i++){\n\
  ctx.fillRect(51+i*16,99,4,4);\n\
}\n\
ctx.fillStyle = "pink"\n\
ctx.beginPath();\n\
ctx.moveTo(83,116);\n\
ctx.lineTo(83,102);\n\
ctx.bezierCurveTo(83,94,89,88,97,88);\n\
ctx.bezierCurveTo(105,88,111,94,111,102);\n\
ctx.lineTo(111,116);\n\
ctx.lineTo(106.333,111.333);\n\
ctx.lineTo(101.666,116);\n\
ctx.lineTo(97,111.333);\n\
ctx.lineTo(92.333,116);\n\
ctx.lineTo(87.666,111.333);\n\
ctx.lineTo(83,116);\n\
ctx.fill();\n\
ctx.fillStyle = "white";\n\
ctx.beginPath();\n\
ctx.moveTo(91,96);\n\
ctx.bezierCurveTo(88,96,87,99,87,101);\n\
ctx.bezierCurveTo(87,103,88,106,91,106);\n\
ctx.bezierCurveTo(94,106,95,103,95,101);\n\
ctx.bezierCurveTo(95,99,94,96,91,96);\n\
ctx.moveTo(103,96);\n\
ctx.bezierCurveTo(100,96,99,99,99,101);\n\
ctx.bezierCurveTo(99,103,100,106,103,106);\n\
ctx.bezierCurveTo(106,106,107,103,107,101);\n\
ctx.bezierCurveTo(107,99,106,96,103,96);\n\
ctx.fill();\n\
ctx.fillStyle = "black";\n\
ctx.beginPath();\n\
ctx.arc(101,102,2,0,Math.PI*2,true);\n\
ctx.fill();\n\
ctx.beginPath();\n\
ctx.arc(89,102,2,0,Math.PI*2,true);\n\
ctx.fill();\n\
ctx.fillStyle="blue";\n\
ctx.font="24pt Helvetica";\n\
ctx.fillText("Eat or be eaten!", 10, 230);'

, animate1: 'var x = 0\n\
  , y = 0;\n\
\n\
function drawSmiley() {\n\
  ctx.beginPath();\n\
  ctx.arc(x+75,y+75,50,0,Math.PI*2,true);\n\
  ctx.fillStyle = "yellow";\n\
  ctx.fill();\n\
\n\
  ctx.moveTo(x+110,y+75);\n\
  ctx.arc(x+75,y+75,35,0,Math.PI,false);\n\
  ctx.moveTo(x+65,y+65);\n\
  ctx.arc(x+60,y+65,5,0,Math.PI*2,true);\n\
  ctx.moveTo(x+95,y+65);\n\
  ctx.arc(x+90,y+65,5,0,Math.PI*2,true);\n\
  ctx.stroke();\n\
}\n\
\n\
function animateStep() {\n\
  x += 5;\n\
  y += 5;\n\
  drawSmiley();\n\
}\n\
\n\
animateStep();'

, transformBasic: '// disable state\n\
ctx.translate(0, 0);\n\
ctx.rotate(0*Math.PI/180);\n\
ctx.scale(1.0, 1.0);\n\
\n\
function drawSmiley() {\n\
  ctx.beginPath();\n\
  ctx.arc(0,0,50,0,Math.PI*2,true);\n\
  ctx.fillStyle = "yellow";\n\
  ctx.fill();\n\
\n\
  ctx.moveTo(35,0);\n\
  ctx.arc(0,0,35,0,Math.PI,false);\n\
  ctx.moveTo(-10,-10);\n\
  ctx.arc(-15,-10,5,0,Math.PI*2,true);\n\
  ctx.moveTo(20,-10);\n\
  ctx.arc(15,-10,5,0,Math.PI*2,true);\n\
  ctx.stroke();\n\
}\n\
\n\
drawSmiley();'

, transformAnimate: '// disable state\n\
ctx.translate(200, 200);\n\
\n\
function drawSmiley() {\n\
  ctx.beginPath();\n\
  ctx.arc(0,0,50,0,Math.PI*2,true);\n\
  ctx.fillStyle = "yellow";\n\
  ctx.fill();\n\
\n\
  ctx.moveTo(35,0);\n\
  ctx.arc(0,0,35,0,Math.PI,false);\n\
  ctx.moveTo(-10,-10);\n\
  ctx.arc(-15,-10,5,0,Math.PI*2,true);\n\
  ctx.moveTo(20,-10);\n\
  ctx.arc(15,-10,5,0,Math.PI*2,true);\n\
  ctx.stroke();\n\
}\n\
\n\
function animateStep() {\n\
  ctx.translate(10, 10);\n\
  // ctx.rotate(15*Math.PI/180);\n\
  // ctx.scale(1.25, 1.25);\n\
\n\
  drawSmiley();\n\
}\n\
\n\
// setInterval(animateStep, 500);'

, stateAnimate: '// disable state\n\
// ctx.translate(200, 200);\n\
\n\
function drawSmiley() {\n\
  ctx.beginPath();\n\
  ctx.arc(0,0,50,0,Math.PI*2,true);\n\
  ctx.fillStyle = "yellow";\n\
  ctx.fill();\n\
\n\
  ctx.moveTo(35,0);\n\
  ctx.arc(0,0,35,0,Math.PI,false);\n\
  ctx.moveTo(-10,-10);\n\
  ctx.arc(-15,-10,5,0,Math.PI*2,true);\n\
  ctx.moveTo(20,-10);\n\
  ctx.arc(15,-10,5,0,Math.PI*2,true);\n\
  ctx.stroke();\n\
}\n\
\n\
var x=0, y=0, rotation=0, scaleX=1.0, scaleY=1.0;\n\
\n\
function animateStep() {\n\
  x += 10;\n\
  y += 5;\n\
  rotation += 5;\n\
  scaleX *= 1.01;\n\
  scaleY *= 1.02;\n\
\n\
  ctx.fillStyle   = "#888";\n\
  ctx.fillRect(0,0,640,480);\n\
\n\
  ctx.save();\n\
  ctx.translate(x, y);\n\
  ctx.rotate(rotation*Math.PI/180);\n\
  ctx.scale(scaleX, scaleY);\n\
\n\
  drawSmiley();\n\
  ctx.restore();\n\
\n\
}\n\
\n\
setInterval(animateStep, 50);'


}