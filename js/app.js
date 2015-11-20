
// Enemies our player must avoid
var Enemy = function(locX, locY, speed) {
    // Variables applied to each of our instances go here, we've provided one for you to get started
    this.iniPos = 0;
    this.x = locX;
    this.y = locY;
    this.speed = 505 * Math.random();
    this.width = 101;
    this.height = 171;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter which will ensure the game runs at the same speed for
    // all computers.
    if ((this.x + 25) <= 525)
        this.x += this.speed * dt;
    else {
        this.x = this.iniPos * this.speed * dt;//this.x = -101;
        this.y = Math.floor(Math.random() * 3) * 83 + 58;
    }

    if(this.row == player.row) {
        if(this.x + 70 > player.x && this.x < player.x + 70 &&
           this.y >= player.y - 10 && this.y <= player.y + 10 ){
                player.reset(true);
                console.log("YOU LOOSE: "+this.x+','+this.y+' p:'+
                    player.x+','+player.y
                    );
            }

    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    // location of the player
    this.x = 101 * 2;
    this.y = 83 * 4.5;
    this.width = 101;
    this.height = 171;
    this.score = 0;

    // avatar of the player
    this.sprite = 'images/char-boy.png';
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function(state) {
    this.x = 101 * 2;
    this.y = 83 * 4.5;
    if(state){
        this.score = 0;
    } else {
        console.log('Your score: '+ this.score);
    }


};

Player.prototype.update = function(dt) {

  // Check if player wins
    if (player.y <= 50) {
        console.log("YOU WIN: "+this.x+','+this.y);
        this.score++;
        player.reset(false);
    }
};

// Player handleInput() method
Player.prototype.handleInput = function(keyCode) {
    // Do stuff with the keyCode
    switch(keyCode) {
        case 'left':
            this.x -= ((this.x - 50) > 0) ?  50 : 0;
            break;
        case 'right':
            this.x += ((this.x + 50) < 405) ? 50 : 0;
            break;
        case 'up':
            this.y -= ((this.y - 50) > 0) ? 50 : 0;
            break;
        case 'down':
            this.y += ((this.y + 50) < 455) ? 50 : 0;
            break;
    };
};
//
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
for (var i = 0; i < 5; i++) {
    allEnemies.push(new Enemy());
}

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
