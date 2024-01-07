import { Component, OnInit } from '@angular/core';
import { productsUrl } from 'src/app/config/api';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

productList: Product[] = []
wishList: number[] = []

  constructor(
    private productService:ProductService,
    private wishListService: WishlistService
    ) { }

  ngOnInit(): void {
    this.loadProducts()
    this.loadWishList()
    // Subscribing to an Observable is like calling a function, 
    //providing callbacks where the data will be delivered to 
    
  }

  loadProducts(){
    this.productService.getProducts().subscribe((products) =>{
      this.productList = products;
      
    } )
  }

  loadWishList(){
    this.wishListService.getWishList().subscribe(productIds =>{
      
        this.wishList = productIds})

    
  }

}
