// Selecciona el canvas y su contexto 2Dc
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

// Ajusta el tamaño del canvas a la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configuración de globos
const balloons = [];
const numBalloons = 20; // Número de globos
const balloonColors = ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff'];

// Clase para globos
class Balloon {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 30 + 20; // Tamaño aleatorio
        this.color = color;
        this.velocityY = Math.random() * -2 - 1; // Velocidad vertical aleatoria
        this.alpha = 1; // Transparencia inicial
    }

    // Actualiza la posición del globo
    update() {
        this.y += this.velocityY; // Sube el globo
        if (this.y < -this.size) {
            this.y = canvas.height + this.size; // Resetea la posición cuando se sale de la pantalla
        }
    }

    // Dibuja el globo en el canvas
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha; // Aplica la transparencia
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

// Crear globos
function createBalloons() {
    for (let i = 0; i < numBalloons; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height + canvas.height; // Posición inicial fuera de la pantalla
        const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        balloons.push(new Balloon(x, y, color));
    }
}

// Función para actualizar y dibujar los globos
function updateBalloons() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
    balloons.forEach((balloon) => {
        balloon.update();
        balloon.draw();
    });
}

// Animación de globos
function animateBalloons() {
    requestAnimationFrame(animateBalloons); // Solicita el siguiente cuadro de animación
    updateBalloons(); // Actualiza los globos
}

createBalloons(); // Crea los globos
animateBalloons(); // Inicia la animación

// -------------------------------
// Texto Dinámico
// -------------------------------
const messages = ["¡Felicidades cuchurrumi un cumpleaños mas juntos!", "Perooooo....", "Quiero que sepas :3","Que apesar de todas las peleas o discuciones","Te sigo mirando como la primera vez","Que me enamore de ti","esto es algo simple....","Porque te mereces lo mejor","y eso....","¡Soy yo!"
,"te amo cuchurrumi"];
let messageIndex = 0;

const messageElement = document.querySelector('h1');

function changeMessage() {
    messageElement.textContent = messages[messageIndex]; // Cambia el texto
    messageIndex = (messageIndex + 1) % messages.length; // Pasa al siguiente mensaje de manera cíclica
}

// Cambiar el mensaje cada 8 segundos
setInterval(changeMessage, 3000);

