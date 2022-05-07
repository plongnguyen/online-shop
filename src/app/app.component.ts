import { Component } from '@angular/core';
import { Sanpham } from './class/sanpham.class';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Thời Trang Phi Long';
  dssp: Sanpham[]=[];

  constructor(private apiService: ApiService){
    this.apiService.readSanpham().subscribe((dssp: Sanpham[])=>{
      this.dssp = dssp;
    })
  }
}
