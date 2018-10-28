a=[[0,10,221,9],[75,40,200,9],[40,110,230,9],[75,10,15,129],[206,10,15,109],[256,80,15,70],[40,80,232,9]];
b=[[40,80,25,9]];
var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
var x= a[0][0]+4;
var y= a[0][1]+4;
var attack=0;
var message = "Santa please bring chocolates!!";
var tempm=message;
var flag=0,mov=4;
//document.getElementById("button").setAttribute("style", "display:none;");
//document.getElementById("next").disabled=true;
function drawWall()
{
	for(var i=0;i<a.length;i++)
	{
		ctx.beginPath();
		ctx.rect(a[i][0],a[i][1],a[i][2],a[i][3]);
		ctx.fillStyle="#ffffff";
        ctx.fill();b[0][0]
		ctx.closePath();
	}
    ctx.beginPath();
    ctx.rect(b[0][0],b[0][1],b[0][2],b[0][3]);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.closePath();
	print(message);
}
function changeWidth()
{
    if( typeof changeWidth.c == 'undefined' ) {
        changeWidth.c = 2;
    }
    if(b[0][0]+changeWidth.c+b[0][2]>a[6][2]+a[6][0] || b[0][0]+changeWidth.c<a[6][0] )
    {
        changeWidth.c=-changeWidth.c;
    }
    
    ctx.clearRect(a[6][0],a[6][1],a[6][2],a[6][3]);
    b[0][0]+=changeWidth.c;
    ctx.beginPath();
    ctx.rect(b[0][0],b[0][1],b[0][2],b[0][3]);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.closePath();
    draw(0,0);
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
    }
    if(y+8>canvas.height)
    {
        console.log("check");
         x= a[0][0]+4;
         y= a[0][1]+4;
        message="Santa please bring chocolates!!";
        b[0][2]+=25;
        if(flag==1)
        {
            mov=0;
            message="";
            //document.getElementById("but").setAttribute("style", "display:none;");
        }

    }
    for(var i=0;i<b.length;i++)
    {
    if(( x>b[i][0] && x<b[i][0]+b[i][2]) && (y>b[i][1] && y<b[i][1]+b[i][3]))
    {
    	//alert("curropt");
    	attack=1;
    	drawWall();
    	message="Santa I hate you!!";
    	print(message);
    	document.getElementById("ch").setAttribute("src","angrysanta.jpeg");
    	document.getElementById("unblockit").setAttribute("style","display: block;");
        flag=1;
    	return;
    }
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
            draw(0,-mov/2);
            break;
        case 40:
            draw(0,mov/2);
            break;
        case 37:
            draw(-mov,0);
            break;
        case 39:
            draw(mov,0);
            break;
    }

    return false;
    }
    
  	document.onkeydown = checkKeycode;
    setInterval(changeWidth, 10);