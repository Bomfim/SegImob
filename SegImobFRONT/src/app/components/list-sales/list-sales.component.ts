import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SaleService } from 'src/app/shared/services/sale.service';
import { SalesViewModel } from 'src/app/shared/models/sale.model';
@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.scss']
})
export class ListSalesComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['Seller', 'Product', 'Commission'];
  dataSource = new MatTableDataSource<SalesViewModel>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() newSaleHandler: boolean;

  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.getAllSales();
  }

  public getAllSales() {
    this.saleService.getAllSales().subscribe(res => {
      this.dataSource.data = res as SalesViewModel[];
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.newSaleHandler.currentValue){
      this.getAllSales();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}