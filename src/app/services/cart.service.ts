import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../models/cart-item';
import { map, Observable } from 'rxjs';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { } //dependcy injection

//   setData(data: any) {
//     const jsonData = JSON.stringify(data)
//     localStorage.setItem(Product.id, jsonData)
//  }
  getCartItems(): Observable<CartItem[]>{
    //TODO: Mapping the obtained result to our CartItem props, (pipe() map())
   return this.http.get<CartItem[]>(cartUrl).pipe(
    map( (result:any[]) => {
      let cartItems: CartItem[] = []

      for(let item of result){
        let productExists = false;

        for(let i in cartItems){
                if(cartItems[i].productId === item.product.id){
                cartItems[i].qty++
                productExists = true;
                
                
                break;
              }}
    
              if(!productExists){
                cartItems.push(new CartItem(item.id, item.product))
        
      }}
      return cartItems
      
     } )
   )
  }
 
  addProductToCart(product:Product):Observable<any>{
    return this.http.post(cartUrl, { product })
  }
// will return {id : 1, product: {}}
}
