"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var vehicle_1 = require("./vehicle");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, doors, releaseYear) {
        var _this = _super.call(this, brand, model) || this;
        _this.doors = doors;
        _this.releaseYear = releaseYear;
        return _this;
    }
    Car.prototype.startEngine = function () {
        console.log("Starting the engine of the car: ".concat(this.brand, " ").concat(this.model, " releaseYear: ").concat(this.releaseYear));
    };
    Car.prototype.displayInfo = function () {
        console.log("Doors: ".concat(this.doors));
    };
    return Car;
}(vehicle_1.Vehicles));
exports.Car = Car;
