"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var Entity = /** @class */ (function () {
    function Entity(id, name) {
        this.id = id;
        this.name = name;
    }
    Entity.prototype.displayInfo = function () {
        console.log(this.getDescription());
    };
    return Entity;
}());
exports.Entity = Entity;
