import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { wishListUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishList()
{
   return this.http.get(wishListUrl).pipe(
    map((result: any) => {
      let productIds:any = []
    result.forEach((item:any) => productIds.push(item.id))
      return productIds;
    })
   )
}


//To do : add to localstorage instead http.post
  addToWishList(productId: any)
  {
   return this.http.post(wishListUrl, { id: productId })
  }

  removeFromWishList(productId:any)
  {
   return this.http.delete(wishListUrl + '/' + productId)
  }
}
