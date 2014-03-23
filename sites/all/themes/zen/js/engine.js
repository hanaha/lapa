var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x1 = 110;
var y1 = 110;
var x2 = 220;
var y2 = 220;
//ctx.fillStyle = "#FF0000";
//ctx.fillRect(x1,y1,x2,y2);

var inCanvas = 0;

for (var i = 0; i < 8 ; i ++)
{
    ctx.beginPath();
    ctx.moveTo(i*70, 0);
    ctx.lineTo(i*70, 490);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i*70);
    ctx.lineTo(490, i*70);
    ctx.stroke();
}

var toggle = 'yeah';

//window.document.getElementById('content').innerHTML = '<button type="button" onclick="tellMe()">Click here! Come one, I know you want to!</button>\n\
//<div id="well">No text here. Just look away.</div>';
function tellMe()
{
    if (toggle === 'yeah') {
//alert('kjyjkhjmtk');
        document.getElementById("well").innerHTML = '<div>And boom! all full of text!</div>';
        toggle = 'nay';
    }
    else {
        document.getElementById("well").innerHTML = 'And again no text at all!';
        toggle = 'yeah';
    }
}

function onCanvasClick(event)
{
    var x=event.clientX;
    var y=event.clientY;
    var key = getIDFromCoords(x, y);

    var value = 'A';

    document.getElementById('edit-key').setAttribute("value", key);
    document.getElementById('edit-value').setAttribute("value", value);
}

function show_coords(event)
{
    var x=event.clientX;
    var y=event.clientY;
    document.getElementById('output').innerHTML = "X coords: " + x + ", Y coords: " + y;
}

function moveInCanvas()
{
    inCanvas = 1;
}

function moveOutCanvas()
{
    inCanvas = 0;
}

function getIDFromCoords(x, y)
{
    x = x - document.getElementById('myCanvas').getBoundingClientRect().left;
    x = x/70;
    x = Math.floor(x);

    y = y - document.getElementById('myCanvas').getBoundingClientRect().top;
    y = y/70;
    y = Math.floor(y);

    return x + ':' + y;
}
