var color = "red";
var speed = "100kmph";
var go = (message) => console.log(message);
var stopText = "stop";

var car = {
    color, 
    speed, 
    go,
    [stopText]: function(){
        console.log("stop");
    }
};
car.go("vroom");
car.stop();
