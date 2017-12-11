import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})

export class HtmlComponent implements OnInit {
  products: any ;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts('https://www.googleapis.com/books/v1/volumes?q=html')
      .subscribe(products => this.products = products);
  }
}
