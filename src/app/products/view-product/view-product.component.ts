import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';



@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']

})
export class ViewProductComponent implements OnInit {

  prodId:any
  productdata:any
  constructor(private ps:ProductsService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data:any) => {

      this.prodId=data["id"]
    
      this.ps.viewProduct(this.prodId).subscribe((data:any)=>{
        this.productdata=data

      })
    
        

      })

  


  }

}



