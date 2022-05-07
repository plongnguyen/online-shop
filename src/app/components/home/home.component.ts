import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Sanpham } from 'src/app/class/sanpham.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dssp: Sanpham[]=[];
  constructor(private apiService: ApiService) { 
    this.apiService.readSanphamHot().subscribe((dssp: Sanpham[]) => {
      this.dssp=dssp;
    })
  }

  ngOnInit(): void {
  }

}
