let controllerIndex = null;

window.addEventListener('gamepadconnected', (event) => {
    const gamepad = event.gamepad;
    controllerIndex = gamepad.index;
    console.log('connected');
});

window.addEventListener('gamepaddisconnected', (event) => {
    controllerIndex = null;
    console.log('disconnected');
});

/**
 * 
 * @param {Array} buttons 
 * 
 * Switch-Pro Controller-Buttons:
 * 
 * 0 = B-Button, 1 = A-Button
 * 2 = Y-Button, 3 = X-Button
 * 4 = L-Button, 5 = R-Button
 * 6 = ZL-Button, 7 = ZR-Button
 * 8 = MINUS-Button, 9 = PLUS-Button
 * 10 = LS-Button, 11 = RS-Button
 * 12 = D-Pad UP, 13 = D-Pad DOWN
 * 14 = D-Pad LEFT, 15 = D-Pad RIGHT
 * 16 = Home-Button, 17 = Capture-Button
 */
function handleButtons(buttons) {
    if (buttons[0]['pressed']) {
        player.jump();
        console.log('Jump');
    }
}