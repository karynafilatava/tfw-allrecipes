"use strict";

var inheritance = {
    inherits: function(Parent, Child) {
        var F = function() {};
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
    }
};

module.exports = inheritance;