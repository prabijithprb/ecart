import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  pid: any;
  pdata: any;
  constructor(private ar: ActivatedRoute, private ps: ProductsService) { }
  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data["id"]
    })
    this.ps.viewProduct(this.pid).subscribe((data: any) => {
      this.pdata = data
    })
  }


updateProduct(form:any){
  
    this.ps.updateProduct(this.pid,this.pdata).subscribe((item:any)=>{
      alert("updated")
    }     )
}
  
}









