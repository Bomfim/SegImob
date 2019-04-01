import { Component, OnInit, ViewChild, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Price', 'update', 'delete'];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() newProductHandler: boolean;
  @Output() editProductEvent = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  public getAllProducts() {
    this.productService.getAllProducts().subscribe(res => {
      this.dataSource.data = res as Product[];
    })
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.newProductHandler.currentValue) {
      this.getAllProducts();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDelete(element: Product) {
    //TODO Modal de exclusão!
  }

  redirectToUpdate(element: Product) {
    this.editProductEvent.emit(element);
  }

}
