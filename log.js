class Log {
    constructor(x, y, height, angle) {
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1
        }
        this.body = Bodies.rectangle(x, y, 20, height, options)
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body, angle) // PI 
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position
        var angle = this.body.angle

        push()
        translate(pos.x, pos.y)  // keeps on passing new x and y positions to rect
        rotate(angle)  // keeps on rotating the object based on angle
        fill("tan");
        strokeWeight(4)
        stroke("brown")
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);

        pop()
    }


}