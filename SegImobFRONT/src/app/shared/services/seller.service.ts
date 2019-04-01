import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../models/seller.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  baseURL = "http://localhost:50717/api/";

  getAllSellers() {
    return this.http.get<Seller[]>(this.baseURL + 'Sellers');
  }

  getSellerById(id: number) {
    return this.http.get<Seller>(this.baseURL + 'Products' + '/' + id);
  }

  addSeller(Seller: Seller) {
    return this.http.post(this.baseURL + 'Sellers', Seller);
  }

}
