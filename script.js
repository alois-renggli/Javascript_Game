const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();

// playerImage.src = 

let x = 0;
let y = 0;
let x2 = CANVAS_WIDTH;
let y2 = CANVAS_HEIGHT;

function animate() {
    ctx.clearRect(0,0,CANVAS_HEIGHT,CANVAS_HEIGHT);

    ctx.fillRect(x,y,100,100);
    // ctx.fillRect(100,100,x,x);
    if (x < (CANVAS_WIDTH - 100)){
        x++;
        y++;
        requestAnimationFrame(animate);

    }
    else{
        requestAnimationFrame(animate);

    }


}

animate();
console.log(ctx);