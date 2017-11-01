'use strict'

var bubbles = [];
// @doc -> https://www.youtube.com/watch?v=DEHsr4XicN8 - 01.11.17
function Bubble(x,y) {
    this.x = x;
    this.y = y;
    this.color = color(255,100);

    this.display = function () {
        stroke(255);
        fill(this.color);
        ellipse(this.x, this.y, 48, 48);
    }

    this.clicked = function() {
        var d = dist(mouseX, mouseY, this.x,this.y)
        if (d < 24)
            this.color = color(255,0,200) 
    }

    this.move = function() {
        this.x = this.x + random(-1,1)
        this.y = this.y + random(-1,1)
    }
}

function mousePressed() {
    for (var i = 0; i < bubbles.length; ++i){
        bubbles[i].clicked();
    }
}

function setup() {
    createCanvas(600,400);
    for (var i = 0; i < 5; ++i) {
        var x = random(width);
        var y = random(height);

        bubbles.push(new Bubble(x,y))
    }
}

function draw() {
    background(0);
    for (var i = 0; i < bubbles.length; ++i){
        bubbles[i].move();
        bubbles[i].display()
    }
}