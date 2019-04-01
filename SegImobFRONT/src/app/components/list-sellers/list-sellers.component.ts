import { Component, OnInit, SimpleChanges, ViewChild, Input } from '@angular/core';
import { SellerService } from 'src/app/shared/services/seller.service';
import { Seller } from 'src/app/shared/models/seller.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-sellers',
  templateUrl: './list-sellers.component.html',
  styleUrls: ['./list-sellers.component.scss']
})
export class ListSellersComponent implements OnInit {

  displayedColumns: string[] = ['Name'];
  dataSource = new MatTableDataSource<Seller>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() newSellerHandler: boolean;

  constructor(private sellerService: SellerService) { }

  ngOnInit() {
    this.getAllSellers();
  }

  public getAllSellers() {
    this.sellerService.getAllSellers().subscribe(res => {
      this.dataSource.data = res as Seller[];
    })
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.newSellerHandler.currentValue) {
      this.getAllSellers();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
