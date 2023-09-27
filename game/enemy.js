var Enemy = function(color, position, direction) {

    this.position = position;
    this.life = 1;
    this.direction = direction;
    this.speed = 0;

    this.material = new THREE.MeshLambertMaterial({
        color: color,
        });

    var singleGeometry = new THREE.Geometry();

    vehiculeMesh = new THREE.CircleGeometry(5, 32);
    this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
    this.graphic.position.z = 6;
};

Enemy.prototype.dead = function () {
    this.graphic.position.z = this.graphic.position.z-0.1;
        //Nettoyage de la div container
        $("#container").html("");
        jQuery('#'+this.name+' >.life').text("Tu es mort !");
        init();
}

Enemy.prototype.accelerate = function (distance) {
    var max = 2;

    this.speed += distance / 4;
    if (this.speed >= max) {
        this.speed = max;
    }
};

Enemy.prototype.decelerate = function (distance) {
    var min = -1;

    this.speed -= distance / 16;
    if (this.speed <= min) {
        this.speed = min;
    }
};

Enemy.prototype.move = function () {
    this.speed = -3;
    var moveTo = new THREE.Vector3(
        this.speed * Math.cos(this.direction) + this.position.x,
        this.speed * Math.sin(this.direction) + this.position.y,
        this.graphic.position.z
    );

    this.position = moveTo;

    if (this.position.x > WIDTH / 2)
    {
        this.position.x = WIDTH / 2;
        this.speed = -this.speed;
        this.direction = 0;
    }
    else if (this.position.x < -WIDTH / 2)
    {
        this.position.x = -WIDTH / 2;
        this.speed = -this.speed;
        this.direction = Math.PI;
    }
    if (this.position.y > HEIGHT / 2)
    {
        this.position.y = HEIGHT / 2;
        this.speed = -this.speed;
        this.direction = 0;
    }
    else if (this.position.y < -HEIGHT / 2)
    {
        this.position.y = -HEIGHT / 2;
        this.speed = -this.speed;
        this.direction = Math.PI;
    }

    this.graphic.position.x = this.position.x;
    this.graphic.position.y = this.position.y;
    
    light1.position.x = this.position.x;
    light1.position.y = this.position.y;
    //li ght1.position.z = this.graphic.position.z + 500;
};
