import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sale } from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  baseURL = "http://localhost:50717/api/";

  getAllSales() {
    return this.http.get<Sale[]>(this.baseURL + 'Sales');
  }

  addSale(sale: Sale) {
    return this.http.post(this.baseURL + 'Sales', sale);
  }
}
