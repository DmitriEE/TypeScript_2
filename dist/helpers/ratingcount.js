export function RatingCount(product) {
    let counterV = 0;
    let counterQ = 0;
    if (!product.reviews)
        return 0;
    for (const rating of product.reviews) {
        if (rating.rating != null) {
            counterV += rating.rating;
            counterQ += 1;
        }
    }
    return counterV / counterQ;
}
