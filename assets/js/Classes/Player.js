class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 500
        }

        this.width = 100;
        this.height = 100;
        this.sides = {
            bottom: this.position.y + this.height,
        };

        this.velocity = {
            x: 0,
            y: 0,
        };

        this.jumps = {
            allowed: 1,
            used: 0
        }
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    jump() {
        if (this.jumps.used < this.jumps.allowed) {
            this.velocity.y = -10;
            this.jumps.used += 1;
        }
    }


    /**
     * 
     */
    update() {
        this.position.y += this.velocity.y;
        this.sides.bottom = this.position.y + this.height;

        if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += 1;
        } else {
            this.velocity.y = 0; this.jumps.used = 0;
            this.position.y = canvas.height - this.height;
        }
    }
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            player.jump();
            break;
    }
});