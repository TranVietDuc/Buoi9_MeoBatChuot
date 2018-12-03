function Mouse (image,weight,speed){
this.name = image;
this.weight = weight;
this.speed = speed;
this.status = "alive";
this.width = 40;
this.height = 50;
this.top = 100;
this.left = 30;

this.getMouseElement = function(){
    return "<img width='"+ this.width+ "'" +
    "height='"+ this.height + "'" +
    "src='" + this.name +"'" +
     "style='top: "+this.top+"px; left:"+this.left+"px;position:absolute;' />";
}
this.run = function(){
    if(this.left < window.innerWidth - this.width-100)
    {
        this.left += this.speed;
    console.log('ok: '+this.left);
    }
    else if (this.left >= window.innerWidth - this.width-100 && jerry.top<window.innerHeight - jerry.height)
    {
        this.top += this.speed;
        console.log('ok: '+this.top);
    }
}
this.dead = function()
{   
    this.status = "dead";
    console.log(this.status);
    if(this.status === "dead")
    {
        this.speed = 0;
        this.name = "Dead.png";
    }
}
}

// Class Cat
function Cat(image,weight,speed)
{
    this.name = image;
    this.weight = weight;
    this.speed = speed;
    this.width = 100;
    this.height = 150;
    this.top = 300;
    this.left = 80;
    


    this.moveLeft = function(){
        if(this.left > 0)
        this.left -= this.speed;
    }
    this.moveRight = function(){
        if(this.left+100 < window.innerWidth)
        this.left += this.speed;
    }
    this.moveUp = function(){
        if(this.top > 0 )
        this.top -= this.speed;
    }
    this.moveDown = function(){
        if(this.top + 150 < window.innerHeight)
        this.top += this.speed;
    }
    this.getCatElement = function()
    {
        return "<img width='"+ this.width+ "'" +
        "height='"+ this.height + "'" +
        "src='" + this.name +"'" +
         "style='top: "+this.top+"px; left:"+this.left+"px;position:absolute;' />";
    }
}

// Main
var jerry = new Mouse('Jerry2.png',30,20);
var tom = new Cat('Tom.png',50,20);

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            tom.moveLeft();
            break;
        case 39:
            tom.moveRight();
            break;
        case 38:
            tom.moveUp();
            break;
        case 40:
            tom.moveDown();
    }
}

function istomEatJenny(){

    if(tom.top<=(jerry.top+50)&&(tom.top+150)>=jerry.top&&(tom.left+100)>=jerry.left&&tom.left<=(jerry.left+40))
    {   
        console.log("dead");
        jerry.dead();
    }

}
function start()
{    
    istomEatJenny();
    jerry.run();
    document.getElementById("game").innerHTML = jerry.getMouseElement();
    document.getElementById("game").innerHTML += tom.getCatElement();
}


window.onload = function () {

    window.addEventListener('keydown',moveSelection);
    setInterval(start,500);
};

