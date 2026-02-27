"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCount = RatingCount;
function RatingCount(product) {
    let counterV = 0;
    let counterQ = 0;
    for (const rating of product.reviews) {
        if (rating.rating != null) {
            counterV += rating.rating;
            counterQ += 1;
        }
    }
    return counterV / counterQ;
}
