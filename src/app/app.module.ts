import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { AngularComponent } from './angular/angular.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FooterComponent } from './footer/footer.component';
import { PhpComponent } from './php/php.component';
import { JavaComponent } from './java/java.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { MysqlComponent } from './mysql/mysql.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JqueryComponent } from './jquery/jquery.component';
import { SymfonyComponent } from './symfony/symfony.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    AngularComponent,
    PresentationComponent,
    FooterComponent,
    PhpComponent,
    JavaComponent,
    HtmlComponent,
    CssComponent,
    MysqlComponent,
    JavascriptComponent,
    JqueryComponent,
    SymfonyComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpModule], 
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
