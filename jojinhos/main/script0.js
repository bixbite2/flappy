let canvas, ctx, ALTURA, LARGURA, frames = 0;
chao = {
    y: 550,
    altura: 50,
    cor: "#ffdf70",

    desenha: function() {
        let img = document.getElementById('ground');
        ctx.drawImage(img, 0, this.y, LARGURA, this.altura);
        // ctx.fillStyle = this.cor;
        // ctx.fillRect(0, this.y, LARGURA, this.altura);
    }
},

bloco = {
    altura: 50,
    largura: 50,
    cor: "darkred",
    y: 10,
    gravidade: .4,
    velocidade: 0,
    forca: 7,
    pula: function() {
        if(this.y - this.altura > 0) {
            this.velocidade -= this.forca;
        }
    },
    gameover: function() {

    },
    atualiza: function() {
        if(this.y + this.altura < 550) {
            this.velocidade += this.gravidade;
            this.y += this.velocidade;
        }else {
            this.velocidade = 0;
            this.inerciaY = true;

            // alert('aqui é o chão');
            // console.log('Desabou!');
        }
    },
    desenha: function() {
        // ctx.fillStyle = this.cor;
        // ctx.fillRect(50, this.y, this.largura, this.altura);
        let img = document.getElementById('flappy');
        ctx.drawImage(img, 50,this.y, 51, 36);
    },
}

function main() {
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;

    if(LARGURA >= 500) {
        LARGURA = 800;
        ALTURA = 600;
    }

    let canvas = document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.border = "1px solid #000";
    let div = document.getElementById('#center');

    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    document.addEventListener("mousedown", function clique(event) {
        event.preventDefault();
        bloco.pula();
    });

    roda();
}

function roda() {
    atualiza()
    desenha();

    window.requestAnimationFrame(roda);
}
function atualiza () {
    frames++;
    bloco.atualiza();
}

function desenha() {
    let img = document.getElementById('bg');
    ctx.drawImage(img, 0, 0, LARGURA, ALTURA);
    chao.desenha();
    bloco.desenha();
}

// main inicia o game
main();
