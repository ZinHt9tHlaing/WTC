"use strict";
// objectဆောက်ပီး သုံးတာဖြစ်ဖြစ် extendsလုပ်တာပဲဖြစ်ဖြစ် // *! Abstract method ထည့်ထားရင် မဖြစ်မနေ ပြန်ခေါ်သုံးပေးရ
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicles = void 0;
var Vehicles = /** @class */ (function () {
    function Vehicles(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Vehicles.prototype.displayInfo = function () {
        console.log("Vehicle : ".concat(this.brand, " ").concat(this.model));
    };
    return Vehicles;
}());
exports.Vehicles = Vehicles;
