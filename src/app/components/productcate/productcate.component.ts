import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Sanpham } from 'src/app/class/sanpham.class';
import { ActivatedRoute } from '@angular/router';
import { Loaisp } from 'src/app/class/loaisp.class';

@Component({
  selector: 'app-productcate',
  templateUrl: './productcate.component.html',
  styleUrls: ['./productcate.component.css']
})
export class ProductcateComponent implements OnInit {

  loaisp: Loaisp={id_loaisp:0 , tenloai:""}

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { 
  }
  dssp: Sanpham[]=[];

  readNameLoaiSP(id:number){
    this.apiService.readOneLoaisp(id).subscribe((loaisp: Loaisp)=>{
      this.loaisp=loaisp;
    })
  }

  readSPbyID(id:number){
    this.apiService.readSPtheoloai(id).subscribe((dssp: Sanpham[])=>{
      this.dssp=dssp;
    })
  }
  
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.activatedRoute.paramMap.subscribe(params => {
      id=params.get('id');
    }); 
      this.readSPbyID(id);
      this.readNameLoaiSP(id);
    }
  }

