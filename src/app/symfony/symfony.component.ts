import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-symfony',
  templateUrl: './symfony.component.html',
  styleUrls: ['./symfony.component.css']
})

export class SymfonyComponent implements OnInit {
  products: any ;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts('https://www.googleapis.com/books/v1/volumes?q=symfony+framework')
      .subscribe(products => this.products = products);
  }
}
