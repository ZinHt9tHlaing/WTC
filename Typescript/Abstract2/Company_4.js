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
exports.Company = void 0;
var Entity_1_1 = require("./Entity_1");
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name, developers) {
        var _this = _super.call(this, id, name) || this;
        _this.developers = developers;
        return _this;
    }
    Company.prototype.getDescription = function () {
        return "Company: ".concat(this.name, ", Number of Developers: ").concat(this.developers.length);
    };
    Company.prototype.displayDevelopers = function () {
        console.log(this.developers.forEach(function (dev) { return dev.displayInfo(); }));
    };
    return Company;
}(Entity_1_1.Entity));
exports.Company = Company;
