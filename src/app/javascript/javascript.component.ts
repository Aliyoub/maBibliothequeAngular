import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})

export class JavascriptComponent implements OnInit {
  products: any ;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts('https://www.googleapis.com/books/v1/volumes?q=javascript')
      .subscribe(products => this.products = products);
  }
}
