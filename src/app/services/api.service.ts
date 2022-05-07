import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { Users } from '../class/users.class';
import { Sanpham } from '../class/sanpham.class';
import { Loaisp } from '../class/loaisp.class';
import { Hoadon } from '../class/hoadon.class';
import { Cthoadon } from '../class/cthoadon.class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  PHP_API_SERVER="http://localhost/api";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  readOneUser(username: string, password: string):Observable<Users>{
    return this.httpClient.get<Users>(`${this.PHP_API_SERVER}/read_one_user.php/?username=${username}&password=${password}`);
  }

  readOneSanpham(id_sp: number):Observable<Sanpham>{
    return this.httpClient.get<Sanpham>(`${this.PHP_API_SERVER}/read_one_sanpham.php?id_sp=${id_sp}`);
  }
  readOneLoaisp(id_loaisp: number):Observable<Loaisp>{
    return this.httpClient.get<Loaisp>(`${this.PHP_API_SERVER}/read_name_loaisp.php?id_loaisp=${id_loaisp}`);
  }

  readSPtheoloai(id_loaisp: number):Observable<Sanpham[]>{
    return this.httpClient.get<Sanpham[]>(`${this.PHP_API_SERVER}/read_sanpham_theoloai.php/?id_loaisp=${id_loaisp}`);
  }

  readSanpham():Observable<Sanpham[]>{
    return this.httpClient.get<Sanpham[]>(`${this.PHP_API_SERVER}/read_sanpham.php`);
  }

  readSanphamHot():Observable<Sanpham[]>{
    return this.httpClient.get<Sanpham[]>(`${this.PHP_API_SERVER}/read_sanpham_hot.php`);
  }

  readLoaisp():Observable<Loaisp[]>{
    return this.httpClient.get<Loaisp[]>(`${this.PHP_API_SERVER}/read_loaisp.php`);
  }

  readHoadon():Observable<Hoadon[]>{
    return this.httpClient.get<Hoadon[]>(`${this.PHP_API_SERVER}/read_hoadon.php`);
  }

  readCthd():Observable<Cthoadon[]>{
    return this.httpClient.get<Cthoadon[]>(`${this.PHP_API_SERVER}/read_cthoadon.php`);
  }

  createUser(user: Users): Observable<Users> {
    return this.httpClient.post<Users>(`${this.PHP_API_SERVER}/create_user.php`, user);
  }

  createHoadon(hoadon: Hoadon): Observable<Hoadon> {
    return this.httpClient.post<Hoadon>(`${this.PHP_API_SERVER}/create_hoadon.php`, hoadon);
  }

  createCthd(cthd: Cthoadon): Observable<Cthoadon> {
    return this.httpClient.post<Cthoadon>(`${this.PHP_API_SERVER}/create_cthoadon.php`, cthd);
  }

  updateUser(user: Users) {
    return this.httpClient.put<Users>(`${this.PHP_API_SERVER}/update_user.php`, user);
  }

}
