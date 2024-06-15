const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


class Ball {
    constructor(x, y, width, height, dx, dy, imageSrc) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dx = dx;
        this.dy = dy;
        this.image = new Image();
        this.image.src = imageSrc;
    }

    draw() {
        ctx.drawImage(this.image, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);

        
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        // Check for collision with canvas walls
        if (this.x + this.width / 2 > canvas.width || this.x - this.width / 2 < 0  )  {
            this.dx = -this.dx; // Reverse direction
            // Ensure the image doesn't stick to the wall


        }


        if (this.y + this.height / 2 > canvas.height || this.y - this.height / 2 < 0 ) {
            this.dy = -this.dy; // Reverse direction
            // Ensure the image doesn't stick to the wall

        }

        this.draw();
    }
}

// List of image URLs (local images)
const imageSources = [
    '../image/linkdin.png',
    '../image/google.png',
    '../image/instagram.png',
    '../image/microsoft.png',
    '../image/twitter.png',
];

const balls = [];
const iconWidth = 40; // Set your desired icon width
const iconHeight = 80; // Set your desired icon height

for (let i = 0; i < 5; i++) {
    let x = Math.random() * (canvas.width - iconWidth) + iconWidth / 5;
    let y = Math.random() * (canvas.height - iconHeight) + iconHeight / 5;
    let dx = ((Math.random() * 0.5) + 2 )*((-1)**i);
    let dy = ((Math.random() * 0.5) + 2 )*((-1)**i);
    let imageSrc = imageSources[i % imageSources.length];

    balls.push(new Ball(x, y, iconWidth, iconHeight, dx, dy, imageSrc));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach(ball => ball.update());
    requestAnimationFrame(animate);
}

animate();
