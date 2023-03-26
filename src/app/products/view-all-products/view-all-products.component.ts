import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  productList:any
  filterProducts:any
  searchKey:any=""

  constructor(private ps:ProductsService) { }
  ngOnInit(): void {
    this.ps.viewAllProduct().subscribe(data=> {
      // console.log(data);
      this.productList=data

    } )
    this.ps.search.subscribe((value:any)=>{
      this.searchKey=value
    })


  }
  filter(category:any){
    this.filterProducts=this.productList.filter((item:any)=>item.categoryId==category || category=="")

  }

}
