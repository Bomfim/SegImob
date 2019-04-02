import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges, ElementRef } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SaleService } from 'src/app/shared/services/sale.service';
import { SalesViewModel } from 'src/app/shared/models/sale.model';
import * as XLSX from 'xlsx';
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
  @ViewChild('Table') table: any;

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
    if (changes.newSaleHandler.currentValue) {
      this.getAllSales();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table._elementRef.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet');

    XLSX.writeFile(wb, 'Relatorio' + new Date().toLocaleDateString() + '.xlsx');

  }
}