import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SaleService } from 'src/app/shared/services/sale.service';
import { Product } from 'src/app/shared/models/product.model';
import { Seller } from 'src/app/shared/models/seller.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { SellerService } from 'src/app/shared/services/seller.service';
import { NgForm } from '@angular/forms';
import { Sale } from 'src/app/shared/models/sale.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss']
})
export class AddSaleComponent implements OnInit {

  products: Product[];
  sellers: Seller[];
  newSale: Sale;
  @ViewChild('f') form: NgForm;
  @Output() newSaleEvent = new EventEmitter<boolean>();

  constructor(private saleService: SaleService, private productService: ProductService, private sellerService: SellerService, private toastr: ToastrService) { }


  ngOnInit() {

    this.productService.getAllProducts().subscribe(res => {
      this.products = res;
    });

    this.sellerService.getAllSellers().subscribe(res => {
      this.sellers = res;
    });
  }

  onSubmit() {

    this.newSale = {
      ProductId: this.form.controls['product'].value,
      SellerId: this.form.controls['seller'].value,
      Commission: 0.05 * this.products.find(i => i.Id == this.form.controls['product'].value).Price
    }
    this.saleService.addSale(this.newSale).subscribe(res => {
      this.toastr.success('Venda realizada com sucesso');
      this.newSaleEvent.emit(true);
    },
      () => {
        this.toastr.error('Erro!', 'Por favor tente novamente mais tarde.');
        this.newSaleEvent.emit(false);
      });
  }

}
