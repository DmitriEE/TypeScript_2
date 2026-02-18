import { ListOfProducts } from '../helpers/ListOfProd';
import { Product } from '../models/Product';
export const product: Product = {
  id: 1,
  name: "T-shirt",
  available: "in stock",
  price: 25,
  specs: ["cotton", "size M"],
  category: "Clothes",
  supplier: {
    id: 2,
    name: "Zara"
  },
  reviews: [
  { id: 1, rating: 5, text: "Отлично!" },
  { id: 2, rating: 4 }
  ]
};
