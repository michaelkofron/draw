
let canvas = document.getElementById('canvas')

// some hotfixes... ( ≖_≖)
document.body.style.margin = 0;
canvas.style.position = 'relative';

// get canvas 2D context and set him correct size
let ctx = canvas.getContext('2d');
resize();

// last known position
let pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {

  let bounds = canvas.getBoundingClientRect();

    pos.x = e.pageX - bounds.left - scrollX;
    pos.y = e.pageY - bounds.top - scrollY;
}

function resize() {
  ctx.canvas.width = 750;
  ctx.canvas.height = 500;
}

function draw(e) {
  if (e.buttons !== 1) return;

  ctx.beginPath();

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = hidden.innerText;

  ctx.moveTo(pos.x, pos.y); 
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); 

  ctx.stroke(); 
}

