import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm: any
  constructor(private ps:ProductsService) { }
  ngOnInit(): void {

  }
  search(event:any){
    this.searchTerm= event.target.value
    // dend the data to behavior subject
this.ps.search.next(this.searchTerm)

  }

}
