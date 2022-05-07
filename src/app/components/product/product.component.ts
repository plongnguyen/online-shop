import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Sanpham } from 'src/app/class/sanpham.class';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dssp: Sanpham[]=[];
  constructor(private apiService: ApiService) { 
    this.apiService.readSanpham().subscribe((dssp: Sanpham[]) => {
      this.dssp=dssp;
    })
  }

  ngOnInit(): void {
  }

}
