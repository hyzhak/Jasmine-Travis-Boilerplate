/**
 * Project: .
 * User: Eugene-Krevenets
 * Date: 11/11/12
 * Time: 8:04 PM
 * To change this template use File | Settings | File Templates.
 */
myapp = {};

myapp.Greeter = function() { };

myapp.Greeter.prototype.greet = function(name) {
    return "Hello " + name + "!";
};