import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() productItem!: Product;
  @Input() addedToWishList!:boolean;

  constructor(
    private msg: MessengerService,
    private cartService: CartService ,
    private wishListService: WishlistService
    //DI
    ) { }

  ngOnInit(): void {
  }

  handleAddToCard() {
    this.cartService.addProductToCart(this.productItem).subscribe(()=>{
      this.msg.sendMsg(this.productItem)
    } )
  }

  handleAddToWishList(){
  
    this.wishListService.addToWishList(this.productItem.id).subscribe(() => {
    this.addedToWishList = true 
    })

  }

  handleRemoveFromWishList(){

    this.wishListService.removeFromWishList(this.productItem.id).subscribe(()=>{
      this.addedToWishList = false
  })

  }



}
