import { Component, OnInit, EventEmitter, Output, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnChanges {

  products: Product[];
  newProduct: Product;
  editProduct: Product;
  @ViewChild('f') form: NgForm;
  @Output() newProductEvent = new EventEmitter<boolean>();
  @Input() editProductHandler: Product;
  editMode = false;
  teste: any;

  constructor(private productService: ProductService, private toastr: ToastrService) { }


  ngOnInit() {

    this.productService.getAllProducts().subscribe(res => {
      this.products = res;
    });
  }

  onSubmit() {
    this.newProduct = {
      Name: this.form.controls['product'].value,
      Price: this.form.controls['price'].value,
    }
    this.productService.addProduct(this.newProduct).subscribe(res => {
      this.toastr.success('Produto adicionado com sucesso');
      this.newProductEvent.emit(true);
      this.form.reset();
    },
      () => {
        this.toastr.error('Erro!', 'Por favor tente novamente mais tarde.');
        this.newProductEvent.emit(false);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.editProductHandler.firstChange) {
      this.editProduct = {
        Id: changes.editProductHandler.currentValue.Id,
        Name: changes.editProductHandler.currentValue.Name,
        Price: changes.editProductHandler.currentValue.Price
      };

      setTimeout(() => {
        this.form.controls['product'].setValue(changes.editProductHandler.currentValue.Name);
        this.form.controls['price'].setValue(changes.editProductHandler.currentValue.Price);
      });
      this.editMode = true;
    }
  }

  updateProduct() {
    this.editProduct.Name = this.form.controls['product'].value;
    this.editProduct.Price = this.form.controls['price'].value;
    this.productService.updateProduct(this.editProduct).subscribe(() => {
      this.toastr.success('Produto editado com sucesso!');
      this.newProductEvent.emit(true);
    },
      () => {
        this.toastr.error('Erro!', 'Por favor tente novamente mais tarde.');
        this.newProductEvent.emit(false);
      });
  }
}
