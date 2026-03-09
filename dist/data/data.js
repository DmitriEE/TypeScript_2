"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product6 = exports.product5 = exports.product4 = exports.product3 = exports.product2 = exports.product1 = exports.ArrOfProducts = void 0;
const ratingcount_1 = require("../helpers/ratingcount");
exports.ArrOfProducts = [];
//lisame eine
exports.product1 = {
    id: 1,
    name: "T-shirt",
    available: "in stock",
    price: 25,
    specs: ["mat=cotton", "size=M"],
    category: "Clothes",
    supplier: {
        id: 2,
        name: "Zara"
    },
    reviews: [
        { id: 1, rating: 5, text: "Отлично!" },
        { id: 2, rating: 4 }
    ],
    priceupd: 999.99
};
exports.product1.rating = (0, ratingcount_1.RatingCount)(exports.product1);
exports.ArrOfProducts.push(exports.product1);
//
exports.product2 = {
    id: 2,
    name: "Jeans",
    available: "in stock",
    price: 60,
    specs: ["mat=denim", "size=L"],
    category: "Clothes",
    supplier: {
        id: 2,
        name: "Zara"
    },
    reviews: [
        { id: 3, rating: 5, text: "Отличные джинсы" },
        { id: 4, rating: 4 }
    ],
    priceupd: 59.99
};
exports.product2.rating = (0, ratingcount_1.RatingCount)(exports.product2);
exports.ArrOfProducts.push(exports.product2);
exports.product3 = {
    id: 3,
    name: "Sneakers",
    available: "out of stock",
    price: 80,
    specs: ["mat=leather", "size=42"],
    category: "Shoes",
    supplier: {
        id: 3,
        name: "Nike"
    },
    reviews: [
        { id: 5, rating: 5, text: "Очень удобные" },
        { id: 6, rating: 3 }
    ],
    priceupd: 79.99
};
exports.product3.rating = (0, ratingcount_1.RatingCount)(exports.product3);
exports.ArrOfProducts.push(exports.product3);
exports.product4 = {
    id: 4,
    name: "Jacket",
    available: "in stock",
    price: 120,
    specs: ["mat=polyester", "size=XL"],
    category: "Outerwear",
    supplier: {
        id: 4,
        name: "H&M"
    },
    reviews: [
        { id: 7, rating: 4, text: "Тёплая куртка" },
        { id: 8, rating: 5 }
    ],
    priceupd: 110.00
};
exports.product4.rating = (0, ratingcount_1.RatingCount)(exports.product4);
exports.ArrOfProducts.push(exports.product4);
exports.product5 = {
    id: 5,
    name: "Backpack",
    available: "in stock",
    price: 45,
    specs: ["mat=nylon", "capacity=20L"],
    category: "Accessories",
    supplier: {
        id: 5,
        name: "Adidas"
    },
    reviews: [
        { id: 9, rating: 5, text: "Очень удобный рюкзак" },
        { id: 10, rating: 4 }
    ],
    priceupd: 44.50
};
exports.product5.rating = (0, ratingcount_1.RatingCount)(exports.product5);
exports.ArrOfProducts.push(exports.product5);
exports.product6 = {
    id: 6,
    name: "Cap",
    available: "in stock",
    price: 20,
    specs: ["mat=cotton", "size=adjustable"],
    category: "Accessories",
    supplier: {
        id: 6,
        name: "Puma"
    },
    reviews: [
        { id: 11, rating: 4, text: "Хорошая кепка" },
        { id: 12, rating: 3 }
    ],
    priceupd: 19.99
};
exports.product6.rating = (0, ratingcount_1.RatingCount)(exports.product6);
exports.ArrOfProducts.push(exports.product6);
