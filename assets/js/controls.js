let controllerIndex = null;
let currentKeysDirection = [];

window.addEventListener('gamepadconnected', (event) => {
    const gamepad = event.gamepad;
    controllerIndex = gamepad.index;
    console.warn('Controller is connected');
});

window.addEventListener('gamepaddisconnected', (event) => {
    controllerIndex = null;
    console.warn('Controller is disconnected');
});


window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            player.jump();
            break;
        case 'a':
            if (indexOfKey('a') == -1) { currentKeysDirection.push('a'); }
            break;
        case 'd':
            if (indexOfKey('d') == -1) { currentKeysDirection.push('d'); }
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            player.jumps.cooldown = false;
            break;
        case 'a':
            stopWalkLeft();
            break;
        case 'd':
            stopWalkRight();
            break;
    }
});

function indexOfKey(key) {
    return currentKeysDirection.indexOf(key);
}

function stopWalkLeft() {
    currentKeysDirection.splice(indexOfKey('a'), 1);
}

function stopWalkRight() {
    currentKeysDirection.splice(indexOfKey('d'), 1);
}

function playerWalksRight() {
    return indexOfKey('d') > indexOfKey('a');
}

function playerWalksLeft() {
    return indexOfKey('d') < indexOfKey('a');
}


/** 
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
 * 
 * Left-Stick: axes[0] + axes[1]
 * Right-Stick: axes[2] + axes[3]
 * 
 * @param {Array} buttons - An Array of all Controller-Buttons, that includes following information: pressed (bool), touched (bool), value (int)
 * * @param {Array} axes - and right- ([2] + [3]) controll-stick
 */
function handleControllerInput(buttons, axes) {
    const leftStickLeftRight = axes[0];
    const leftStickUpDown = axes[1];

    if (buttons[0]['pressed']) {
        player.jump();
    } else {
        player.jumps.cooldown = false;
    }


    if (leftStickLeftRight < -0.5) {
        player.velocity.x = -4;
    } else if (leftStickLeftRight > 0.5) {
        player.velocity.x = 4;
    } else {
        player.velocity.x = 0;
    }
}