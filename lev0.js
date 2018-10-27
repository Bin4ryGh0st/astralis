a=[[0,10,221,9],[75,40,200,9],[40,80,230,9],[40,110,230,9],[75,10,12,129],[206,10,12,109],[256,80,12,70]];
var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
	var x= a[0][0]+4;
    var y= a[0][1]+4;
function drawWall()
{
	for(var i=0;i<a.length;i++)
	{
		ctx.beginPath();
		ctx.rect(a[i][0],a[i][1],a[i][2],a[i][3]);
		ctx.fillStyle="white";
		ctx.fill();
		ctx.closePath();
	}
}
	function drawBall()
    {
    ctx.beginPath();
    ctx.arc(x, y, 4,0,Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    }
    function draw(dx, dy) 
    {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i=0;i<a.length;i++)
    {
    	if(x+dx>a[i][0]+3 && x+dx<a[i][0]+a[i][2]-5 && y+dy>a[i][1]+3 && y+dy<a[i][1]+a[i][3]-3)
        	{
        		x += dx;
         		y += dy;
         		break;
        	}
    }
    drawWall();
    drawBall();
   
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
