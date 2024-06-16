function isPlayerTouchingTheGround() {

    if (players_feet < canvas.height) {
        player_y++;
        players_feet = player_y + player_height;
    }

}