import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  public quantity : number=1;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products=res;
      this.quantity;
      this.grandTotal=this.cartService.getTotalPrice();  
    })
    console.log(this.quantity);
    console.log(this.grandTotal);
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
    alert("Đã xóa sản phẩm khỏi giỏ hàng");
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}
