define(function(){
    var Greeter = function() { };

    Greeter.prototype.greet = function(name) {
        return "Hello " + name + "!";
    };

    return Greeter;
});