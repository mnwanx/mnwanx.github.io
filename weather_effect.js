const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");
const flash = document.getElementById("flashEffect");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Raindrop {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.length = Math.random() * 20 + 50;
        this.speed = Math.random() * 5 + 20;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.createSplash();
            this.reset();
        }
    }

    draw() {
        ctx.strokeStyle = `rgba(220, 40, 40, ${this.opacity})`;
        // ctx.strokeStyle = `rgba(173, 216, 230, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
    }

    createSplash() {
        let splashCount = Math.floor(Math.random() * 4) + 2;
        for (let i = 0; i < splashCount; i++) {
            splashes.push(new Splash(this.x, canvas.height));
        }
    }
}

class Splash {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 4;
        this.speedY = -Math.random() * 3;
        this.opacity = 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += 0.1; // Gravity effect
        this.opacity -= 0.05;
    }

    draw() {
        ctx.fillStyle = `rgba(220, 40, 40, ${this.opacity})`;
        // ctx.fillStyle = `rgba(173, 216, 230, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

let raindrops = [];
let splashes = [];

for (let i = 0; i < 500; i++) {
    raindrops.push(new Raindrop());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let drop of raindrops) {
        drop.update();
        drop.draw();
    }

    for (let i = splashes.length - 1; i >= 0; i--) {
        splashes[i].update();
        splashes[i].draw();
        if (splashes[i].opacity <= 0) {
            splashes.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
    
}

function triggerThunder() {
    flash.style.opacity = Math.random() * 0.8 + 0.2;
    setTimeout(() => {
        flash.style.opacity = 0;
    }, 100 + Math.random() * 200);
    setTimeout(triggerThunder, Math.random() * 5000 + 2000);
}

// animate();
triggerThunder();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});