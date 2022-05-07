import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList=new BehaviorSubject<any>([]);

  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }
  setProducts(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  getQuantity(): number {
    let quantity = 1;
    this.cartItemList.map((a:any)=>{
      if(a.tensp){

      }
    })
    return quantity;
  }

  addtoCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getQuantity();
    console.log(this.cartItemList);
  }

  getTotalPrice() : number{
    let grandTotal=0;
    let quantity = this.getQuantity();
    this.cartItemList.map((a:any)=>{
      grandTotal += Number(a.dongia*quantity);
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any,index: any)=>{
      if(product.id_sp===a.id_sp){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}
