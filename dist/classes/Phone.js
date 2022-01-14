"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(model, manufacturer, price, owner, battery, display) {
        this._model = model;
        this._manufacturer = manufacturer;
        this._price = price;
        this._owner = owner;
        this.battery = battery;
        this.display = display;
    }
    Object.defineProperty(Phone.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "manufacturer", {
        get: function () {
            return this._manufacturer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    return Phone;
}());
exports.Phone = Phone;
