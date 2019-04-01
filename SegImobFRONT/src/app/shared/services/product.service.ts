import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseURL = "http://localhost:50717/api/";

  getAllProducts() {
    return this.http.get<Product[]>(this.baseURL + 'Products');
  }

  addProduct(product: Product) {
    return this.http.post(this.baseURL + 'Products', product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseURL + 'Products' + '/' + id);
  }

  updateProduct(product: Product){
    return this.http.put(this.baseURL + 'Products' + '/' + product.Id, product);
  }
}
