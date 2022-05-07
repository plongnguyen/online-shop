export class Sanpham {
    public id_sp: number=0;
    public tensp: string="";
    public motasp: string="";
    public dongia: number=0;
    public soluong: number=0;
    public hinhanh: string="";
    public id_loaisp: number=0;
    
    constructor(id_sp: number,tensp: string,motasp:string, dongia:number,soluong:number,hinhanh:string,id_loaisp:number){
        this.id_sp = id_sp;
        this.tensp = tensp;
        this.motasp = motasp;
        this.dongia = dongia;
        this.soluong = soluong;
        this.hinhanh = hinhanh;
        this.id_loaisp = id_loaisp;
    }
}

  