import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent }      from './products/products.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import { AngularComponent } from './angular/angular.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PhpComponent } from './php/php.component';
import { JavaComponent } from './java/java.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { MysqlComponent } from './mysql/mysql.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JqueryComponent } from './jquery/jquery.component';
import { SymfonyComponent } from './symfony/symfony.component';

const routes: Routes = [
  { path: '', redirectTo: '/presentation', pathMatch: 'full' },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'php', component: PhpComponent },
  { path: 'java', component: JavaComponent },
  { path: 'html', component: HtmlComponent },
  { path: 'css', component: CssComponent },
  { path: 'mysql', component: MysqlComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'jquery', component: JqueryComponent },
  { path: 'symfony', component: SymfonyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
