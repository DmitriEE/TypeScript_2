import { Product } from '../models/Product';
import { RatingCount } from '../helpers/ratingcount';
export const ArrOfProducts: Product[]=[];
//lisame eine
export const product1: Product = {
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
product1.rating = RatingCount(product1); 
ArrOfProducts.push(product1);
//

export const product2: Product = {
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
product2.rating = RatingCount(product2); 
ArrOfProducts.push(product2);

export const product3: Product = {
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
product3.rating = RatingCount(product3); 
ArrOfProducts.push(product3);


export const product4: Product = {
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
product4.rating = RatingCount(product4); 
ArrOfProducts.push(product4);


export const product5: Product = {
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

product5.rating = RatingCount(product5); 
ArrOfProducts.push(product5);




export const product6: Product = {
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
product6.rating = RatingCount(product6); 
ArrOfProducts.push(product6);