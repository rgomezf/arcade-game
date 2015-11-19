// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here, we've provided one for you to get started
    var iniPos = Math.random();

    // location of the enemy
    this.x = (Math.random() * 50) + 101;
    this.y = (Math.random() + 83) * 3;
    this.speed = 0; // speed of the enemy

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter which will ensure the game runs at the same speed for
    // all computers.

    // change of position == still need to work with it.  Reset the position of the enemy
    // when it gets to the last column of the matrix

    //this.x = (this.x > ctx.canvas.clientWidth) ? (Math.random() * 50) : this.x + ((Math.random() * 50) * dt);
    console.log('Seed: '+this.get());
    if (this.x > ctx.canvas.clientWidth) {
        this.x = (Math.floor(Math.random()*101)+101) * dt;
        this.y = (Math.floor(Math.random()*50)+50) * 3 * dt;
    } else {
        this.x += (Math.floor(Math.random()*101)+101) * dt;
        this.y = (Math.floor(Math.random()*50)+50) * 3 * dt;
    };

    // handles the collision with the player
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

    // speed of the player
    this.speed = 0;


    // avatar of the player
    this.sprite = 'images/char-boy.png';
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

};

// Player handleInput() method
Player.prototype.handleInput = function(keyCode) {
    // Do stuff with the keyCode
    console.log('position: '+ ',' + this.y);
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

var allEnemies = new Array(); //new Enemy();

for(i=0; i < 2; i++){
    allEnemies.push(new Enemy());
};

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
