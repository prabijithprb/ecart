import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import behavior subject
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // create object for behavior subject
  search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }
  // api call to view all products
  viewAllProduct(){
    return this.http.get('http://localhost:3000/products')

  }
  // api call toview single product
  viewProduct(productId:any){
    return this.http.get('http://localhost:3000/products/'+productId)
  }


  // api to delete a product
  DeleteProduct(productId:any){
    return this.http.delete('http://localhost:3000/products/'+productId)
  }

  // api call to add new product

  addNewProduct(productData:any){
    return this.http.post('http://localhost:3000/products',productData)
  }
  updateProduct(productId:any,productData:any){
    return this.http.put('http://localhost:3000/products/'+productId,productData)
  }
}
