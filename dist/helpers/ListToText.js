export function ProductPrint(List) {
    var _a, _b, _c;
    for (const product of List) {
        if (product.priceupd != null || product.rating != null || ((_a = product.supplier) === null || _a === void 0 ? void 0 : _a.name) != null || product.supplier != null) {
            if (product.priceupd != null) {
                console.log(`${product.name} | ${product.category} | supplier: ${(_b = product.supplier) === null || _b === void 0 ? void 0 : _b.name} | available: ${product.available} | rating: ${product.rating} | specs: ${product.specs} | price: ${product.price} -> ${product.priceupd}`);
            }
            else {
                console.log(`${product.name} | ${product.category} | supplier: ${(_c = product.supplier) === null || _c === void 0 ? void 0 : _c.name} | available: ${product.available} | rating: ${product.rating} | specs: ${product.specs} | price: ${product.price}`);
            }
        }
    }
}
