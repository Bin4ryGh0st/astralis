a=[[0,10,221,9],[90,40,200,9],[40,80,220,9],[40,110,250,9],[75,19,15,120],[206,10,15,100],[256,80,15,70]];
var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
for(var i=0;i<a.length;i++)
{
	ctx.beginPath();
	ctx.rect(a[i][0],a[i][1],a[i][2],a[i][3]);
	ctx.fillStyle="#ffffff";
	ctx.fill();
	ctx.closePath();
}

