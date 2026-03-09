import { ArrOfProducts } from "../data/data";
import { Product } from "../models/Product";
export function ProductPrint(List : Product[], ){
    for(const product of List){
        if(product.priceupd != null || product.rating != null || product.supplier?.name != null || product.supplier != null){
        if(product.priceupd != null){
            console.log(`${product.name} | ${product.category} | supplier: ${product.supplier?.name} | available: ${product.available} | rating: ${product.rating} | specs: ${product.specs} | price: ${product.price} -> ${product.priceupd}`)
        }else{
            console.log(`${product.name} | ${product.category} | supplier: ${product.supplier?.name} | available: ${product.available} | rating: ${product.rating} | specs: ${product.specs} | price: ${product.price}`)
        }
    }
    }
}
