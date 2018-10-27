a=[[0,10,221,9],[75,40,200,9],[40,80,230,9],[40,110,230,9],[75,10,15,129],[206,10,15,109],[256,80,15,70]];
var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
	var x= a[0][0]+1;
    var y= a[0][1]+1;
function drawWall()
{
	for(var i=0;i<a.length;i++)
	{
		ctx.beginPath();
		ctx.rect(a[i][0],a[i][1],a[i][2],a[i][3]);
		ctx.fillStyle="#ffffff";
		ctx.fill();
		ctx.closePath();
	}
}
	function drawBox()
    {
    ctx.beginPath();
    ctx.rect(x, y, 13, 7);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    }
    function draw(dx, dy) 
    {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i=0;i<a.length;i++)
    {
    	if(x+dx>a[i][0] && x+dx<a[i][0]+a[i][2]-11 && y+dy>a[i][1] && y+dy<a[i][1]+a[i][3]-5)
        	{
        		x += dx;
         		y += dy;
         		break;
        	}
    }
    drawWall();
    drawBox();
   
    }
    function checkKeycode(event) {
    // handling Internet Explorer stupidity with window.event
    // @see http://stackoverflow.com/a/3985882/517705
    var keyDownEvent = event || window.event,
        keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;
    switch(keycode)
    {
        case 38:
            draw(0,-4);
            break;
        case 40:
            draw(0,4);
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
