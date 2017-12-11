import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  booksInfosIndesc : any;
  dataForm	= [];
  itemId	: any;
  itemTitle : any;
  itemPublisher : any;
  itemPublishedDate : any;
  itemAuthors : any
  itemDescription : any

constructor(
  private route: ActivatedRoute,
  private location: Location,
  private productService: ProductService
){}

  ngOnInit(): void {
  this.getProduct();
}

getProduct(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.productService.getProduct()
    .subscribe(product => {
          console.log(product.items[id].id);
          this.itemId = product.items[id].id;
          this.itemTitle = product.items[id].volumeInfo.title;
          this.itemPublisher = product.items[id].volumeInfo.publisher;
          this.itemPublishedDate = product.items[id].volumeInfo.publishedDate;
          this.itemAuthors = product.items[id].volumeInfo.authors;
          this.itemDescription = product.items[id].volumeInfo.description;
    });

}
 
goBack(): void {
  this.location.back();
}



}
