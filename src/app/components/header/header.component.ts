import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Loaisp } from 'src/app/class/loaisp.class';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartNumber: number=0;
  dsloaisp: Loaisp[]=[];

  constructor(private apiService: ApiService, private cartService : CartService) { 
    this.apiService.readLoaisp().subscribe((dsloaisp: Loaisp[]) => {
      this.dsloaisp=dsloaisp;
    })
  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.cartNumber=res.length;
    })
  }

}
