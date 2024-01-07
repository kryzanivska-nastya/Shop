import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { productsUrl } from '../config/api';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  constructor(private http: HttpClient) { } //dependency injection

  getProducts(): Observable<Product[]>{ //ob - data (instead products) but it eventually return product array
    
  return this.http.get<Product[]>(productsUrl)
  }
}
