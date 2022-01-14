"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phone_1 = require("./classes/Phone");
function main() {
    var phone = new Phone_1.Phone("model", "manufacturer", 100, "owner");
    console.log(phone.model);
}
main();
