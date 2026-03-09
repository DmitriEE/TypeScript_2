import { Category } from './Category.js';
import { Supplier } from './Supplier.js';
import { Reviews } from './Review.js';
import { RatingCount } from '../helpers/ratingcount.js';


export interface Product {
    id: number
    name: string
    available: string
    price: number
    specs: Array<string>
    category: string
    supplier: Supplier
    reviews: Reviews[]
    rating?: number
    priceupd?: number
}