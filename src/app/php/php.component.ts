import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.css']
})

export class PhpComponent implements OnInit {
  products: any ;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts('https://www.googleapis.com/books/v1/volumes?q=php')
      .subscribe(products => this.products = products);
  }
}
