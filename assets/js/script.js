function init() {
    animate();
}
function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    if (controllerIndex != null) {
        const gamepad = navigator.getGamepads()[controllerIndex];
        handleButtons(gamepad.buttons);
    }

    player.draw();
    player.update();
}