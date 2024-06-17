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
            used: 0,
            height: -15,
            cooldown: false,
        }
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    jump() {
        if (this.jumps.used < this.jumps.allowed && !this.jumps.cooldown) {
            this.jumps.used += 1;
            if (this.jumps.used > 1) {
                this.velocity.y = (this.jumps.height/2) * this.jumps.used;
            } else {
                this.velocity.y = this.jumps.height * this.jumps.used;
            }
            this.jumps.cooldown = true;
        }
    }

    update() {
        this.position.x += this.velocity.x;

        this.position.y += this.velocity.y;
        this.sides.bottom = this.position.y + this.height;

        if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += 1;
        } else {
            this.velocity.y = 0; this.jumps.used = 0; this.jumps.cooldown = false;
            this.position.y = canvas.height - this.height;
        }
    }
}