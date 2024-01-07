import { ProductItemComponent } from "src/app/components/shopping-cart/product-list/product-item/product-item.component";
import { environment } from "src/environments/environment";


export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'
export const wishListUrl = baseUrl + '/wishlist'