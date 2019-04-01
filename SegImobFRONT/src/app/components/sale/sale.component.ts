import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  updateSales = false;
  constructor() { }

  ngOnInit() {
  }

  notifyNewSale(event: any) {
    this.updateSales = true;
  }

}
