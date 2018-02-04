var createGreeting = function(message, name){
    return message + name;
};

var arrowGreeting = (message, name) => message+name;
console.log(arrowGreeting("Hello", "World!"));

var singleParam = message => message;
console.log(singleParam("Hello Single Param Arrow"));

var squared = x => x*x;
console.log(squared(12));

var squared = function(x){
    return x*x;
}

var TestObj = function(){

    console.warn("-----------this value test------------");

    var normalTestMethod = function(){
        console.log("this value in normalTestMethod", this);
    }();

    var arrowTestMethod = () => {
        console.log("this value in arrowTestMethod", this);
    };
    arrowTestMethod();
};

var tObj = new TestObj();
