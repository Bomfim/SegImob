import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  updateProducts = false;
  editProduct: Product;
  constructor() { }

  ngOnInit() {
  }

  notifyNewProduct(event: any) {
    this.updateProducts = true;
  }

  notifyEditProduct(event: Product){
    this.editProduct = event;
  }
}
