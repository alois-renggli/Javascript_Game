const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();

// playerImage.src = 

let x = 50;
let y = 50;
let x2 = CANVAS_WIDTH;
let y2 = CANVAS_HEIGHT;

function animate() {
    ctx.clearRect(0,0,CANVAS_HEIGHT,CANVAS_HEIGHT);

    ctx.fillRect(x,y,100,100);
    ctx.fillRect(x+25,y-50,50,50);

    ctx.fillRect(x+100,y+100,50,50);
    ctx.fillRect(x-50,y-50,50,50);
    ctx.fillRect(x-50,y+100,50,50);
    ctx.fillRect(x+100,y-50,50,50);

    if (x < (CANVAS_WIDTH - 150) && (y == 50)){
        x++;
        // y++;
        requestAnimationFrame(animate);

    }
    else if (x >= (CANVAS_WIDTH - 150) && (y < (CANVAS_HEIGHT - 150))){
        // x--;
        y++;
        requestAnimationFrame(animate);
    }
    else if ((x > 50) && (y > 50)){
        x--;
        // y--;
        requestAnimationFrame(animate);
    }
    else if ((x == 50) && (y > 50)){
        y--;
        // y--;
        requestAnimationFrame(animate);
    }
    else{

        requestAnimationFrame(animate);

    }


}

animate();
console.log(ctx);