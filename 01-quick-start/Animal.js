"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (quantity) {
        console.log("The " + this.name + " move " + quantity);
    };
    return Animal;
}());
exports.Animal = Animal;
