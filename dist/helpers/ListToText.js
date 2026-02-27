"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPrint = ProductPrint;
const data_1 = require("../data/data");
function ProductPrint(List) {
    for (const product of List) {
        if (product.priceupd != null) {
            console.log(`${product.name} | ${product.category} | supplier: ${product.supplier.name} | available: ${product.available} | rating: ${product.rating} | specs: ${product.specs} | price: ${product.price} -> ${product.priceupd}`);
        }
        else {
            console.log(`${product.name} | ${product.category} | supplier: ${product.supplier.name} | available: ${product.available} | rating: ${product.rating} | specs: ${product.specs} | price: ${product.price}`);
        }
    }
}
console.log(ProductPrint(data_1.ArrOfProducts));
