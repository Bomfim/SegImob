import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  updateSellers = false;
  constructor() { }

  ngOnInit() {
  }

  notifyNewSeller(event: any) {
    this.updateSellers = true;
  }
}
