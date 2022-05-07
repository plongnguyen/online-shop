import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Sanpham } from 'src/app/class/sanpham.class';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  public productList : any ;
  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private cartService : CartService){}
  sp: Sanpham={id_sp:0 , tensp:"", motasp:"",dongia:0,soluong:0, hinhanh:"",id_loaisp:0}

  readOneSPbyId(id:number){
    this.apiService.readOneSanpham(id).subscribe((sp: Sanpham)=>{
      this.sp=sp;
    })
  }
  addTocart(sp: any){
    this.cartService.addtoCart(sp); 
    alert("Đã thêm sản phẩm vào giỏ hàng");
  }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    this.activatedRoute.paramMap.subscribe(params => {
      id=params.get('id');
      }); 
      this.readOneSPbyId(id);  

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1, total:a.dongia})
      });
      console.log(this.productList)
    }
}
