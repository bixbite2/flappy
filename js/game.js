let c = document.getElementById('canvas');

let tela = c.getContext('2d');

// let img = document.getElementById('flappy');

// tela.drawImage(img, 130, 180);

// Quadrado

var x = 100;
var y = 100;
tela.rect(x, y, 50, 50);

// Movimentação

tela.stroke();

// function move(e) {
//     // console.log(e.keyCode);
//     let up = 38;
//     let down = 40;
//     let left = 37;
//     let right = 39;
//     let speed = 8;
//     if (e.keyCode === up) {
//         y -= speed;
//     }
//     // if (e.keyCode === down) {
//     //     y += speed;
//     // }
//     if (e.keyCode === left) {
//         x -= speed;
//     }
//     if (e.keyCode === right) {
//         x += speed; 
//     }
//     c.width = c.width;
//     tela.rect(x, y, 50, 50);
//     tela.stroke();
// }

function jump(e) {
    y -= 60;
}

document.onclick = jump;


// tela.drawImage(img, x, y);

function animate() {
    requestAnimationFrame(animate);
    let gravity = 3;

    if (y < 540) {
        y += gravity;
    }
    const rockbottom = c.height;
    if (y > rockbottom) {
        y = rockbottom;
    }

    c.width = c.width;
    tela.rect(x, y, 50, 50);
    tela.stroke();
}

animate();


