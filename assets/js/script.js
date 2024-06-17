function init() {
    animate();
}

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    player.velocity.x = 0;
    if (playerWalksRight()) {
        player.velocity.x = 1;
    } else if (playerWalksLeft()) {
        player.velocity.x = -1;
    }

    if (controllerIndex != null) {
        const gamepad = navigator.getGamepads()[controllerIndex];
        handleControllerInput(gamepad.buttons, gamepad.axes);
    }

    player.draw();
    player.update();
}