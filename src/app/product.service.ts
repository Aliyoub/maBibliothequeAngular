import { Injectable } from '@angular/core';
/** !!!import { HttpClient, HttpHeaders } from '@angular/common/http'; */
import { Http } from '@angular/http';

/** !!!import { of } from 'rxjs/observable/of'; */
/** !!!import { catchError, map, tap } from 'rxjs/operators'; */
import 'rxjs/add/operator/map';

/** const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 
*/

@Injectable()
export class ProductService {
  //private productsUrl = 'https://www.googleapis.com/books/v1/volumes?q=informatique';
  private productsUrl : string;

  constructor(private http: Http){};
    

  getProducts(productsUrl){
  	this.productsUrl = productsUrl;
    return this.http.get(this.productsUrl)
		.map(res => res.json()) 
  }

  getProduct(){
  	return this.getProducts(this.productsUrl);
  }

}
