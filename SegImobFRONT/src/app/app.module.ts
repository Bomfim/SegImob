import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { SellerComponent } from './components/seller/seller.component';
import { SaleComponent } from './components/sale/sale.component';
import { ProductService } from './shared/services/product.service';
import { SaleService } from './shared/services/sale.service';
import { SellerService } from './shared/services/seller.service';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AddSaleComponent } from './components/add-sale/add-sale.component';
import { ListSalesComponent } from './components/list-sales/list-sales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AddSellerComponent } from './components/add-seller/add-seller.component';
import { ListSellersComponent } from './components/list-sellers/list-sellers.component';


@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    ProductComponent,
    SellerComponent,
    AddProductComponent,
    ListProductsComponent,
    AddSaleComponent,
    ListSalesComponent,
    AddSellerComponent,
    ListSellersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [ProductService, SaleService, SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
