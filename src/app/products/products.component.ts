import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {
  phpProducts: any;
  symfonyProducts: any;

  constructor(private productService: ProductService) { }
  ngOnInit() {this.getProducts();}
    
  getProducts(): void {
    this.productService.getProducts('https://www.googleapis.com/books/v1/volumes?q=php')
    .subscribe(phpProducts => {
      this.phpProducts = phpProducts;
    	console.log(this.phpProducts);
    	});    	    
  }

}

