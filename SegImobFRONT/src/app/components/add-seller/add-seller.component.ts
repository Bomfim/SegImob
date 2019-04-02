import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Seller } from 'src/app/shared/models/seller.model';
import { NgForm } from '@angular/forms';
import { SellerService } from 'src/app/shared/services/seller.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.scss']
})
export class AddSellerComponent implements OnInit {

  products: Seller[];
  newSeller: Seller;
  @ViewChild('f') form: NgForm;
  @Output() newSellerEvent = new EventEmitter<boolean>();

  constructor(private sellerService: SellerService, private toastr: ToastrService) { }


  ngOnInit() {

    this.sellerService.getAllSellers().subscribe(res => {
      this.products = res;
    });
  }

  onSubmit() {

    this.newSeller = {
      Name: this.form.controls['seller'].value,
    }
    this.sellerService.addSeller(this.newSeller).subscribe(res => {
      this.toastr.success('Vendedor adicionado com sucesso!');
      this.newSellerEvent.emit(true);
      this.form.reset();

    },
      () => {
        this.toastr.error('Erro!', 'Por favor tente novamente mais tarde.');
        this.newSellerEvent.emit(false);
      });
  }

}
