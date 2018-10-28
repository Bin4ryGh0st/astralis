a=[[0,10,221,9],[75,40,200,9],[40,110,230,9],[75,10,15,129],[206,10,15,109],[256,80,15,70],[40,80,232,9]];
var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
var x= a[0][0]+4;
var y= a[0][1]+4;
var attack=0;
var message = "Santa please bring chocolates!!";
var tempm=message;
//document.getElementById("next").disabled=true;
function drawWall()
{
	for(var i=0;i<a.length;i++)
	{
		ctx.beginPath();
		ctx.rect(a[i][0],a[i][1],a[i][2],a[i][3]);
		if(i==6 && attack)
		{
			ctx.fillStyle="#ff0000";
		}
		else
		{
			ctx.fillStyle="#ffffff";
		}
		ctx.fill();
		ctx.closePath();
	}
	print(message);
}
function drawBall()
{
    ctx.beginPath();
    ctx.arc(x, y, 4,0,Math.PI*2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

function print(m)
{
	ctx.font = "10px Arial";
	ctx.fillStyle="#00ff00";
	if(m==tempm)
	{
		ctx.fillText(m,x-70,y-5);
	}
	else
	{
		ctx.fillText(m,x-40,y-5);
		ctx.font = "10px Arial";
		ctx.fillStyle="#ffff00";
		ctx.fillText("A bad person's zone!!",110,88);
	} 
}

function draw(dx, dy) 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i=0;i<a.length;i++)
    {
    	if(x+dx>a[i][0]+5 && x+dx<a[i][0]+a[i][2]-5 && y+dy>a[i][1]+3 && y+dy<a[i][1]+a[i][3]-3)
        	{
        		x += dx;
         		y += dy;
         		break;
        	}
        	console.log([x,y]);
    }
    if(( x==84 || x==212) && (y==82 || y== 84))
    {
    	//alert("curropt");
    	attack=1;
    	drawWall();
    	message="Santa I hate you!!";
    	print(message);
    	document.getElementById("ch").setAttribute("src","angrysanta.jpeg");
    	document.getElementById("unblockit").setAttribute("style","display: block;");
    	return;
    }
    drawWall();
    drawBall();
    print(message);
}
    function checkKeycode(event) {
    // handling Internet Explorer stupidity with window.event
    // @see http://stackoverflow.com/a/3985882/517705
    var keyDownEvent = event || window.event,
        keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;
    switch(keycode)
    {
        case 38:
            draw(0,-2);
            break;
        case 40:
            draw(0,2);
            break;
        case 37:
            draw(-4,0);
            break;
        case 39:
            draw(4,0);
            break;
    }

    return false;
    }
  	document.onkeydown = checkKeycode;
