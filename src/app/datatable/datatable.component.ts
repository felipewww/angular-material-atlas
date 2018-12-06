import {Component, Inject, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PaginatorIntlService extends MatPaginatorIntl {
  itemsPerPageLabel = 'Itens por página';
  nextPageLabel     = 'Próxima';
  previousPageLabel = 'Anterior';
  lastPageLabel = 'Última';
  firstPageLabel = 'Primeira';
}

export interface PeriodicElement {
  dateMoviment: string;
  coin: number;
  proft: string;
  profitPercentage: string;
  balance: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { dateMoviment: 'Hydrogen', coin: 1.0079, proft: 'H', profitPercentage: '00ffxx', balance: 'balance!'},
  { dateMoviment: 'Helium', coin: 4.0026, proft: 'He', profitPercentage: '00ffxx', balance: 'balance!'},
  { dateMoviment: 'Lithium', coin: 6.941, proft: 'Li', profitPercentage: '00ffxx', balance: 'balance!'},
  { dateMoviment: 'Beryllium', coin: 9.0122, proft: 'Be', profitPercentage: '00ffxx', balance: 'balance!'},
  { dateMoviment: 'Boron', coin: 10.811, proft: 'B', profitPercentage: '00ffxx', balance: 'balance!'},
  { dateMoviment: 'Carbon', coin: 12.0107, proft: 'C', profitPercentage: '00ffxx', balance: 'balance!'},
  { dateMoviment: 'Nitrogen', coin: 14.0067, proft: 'N', profitPercentage: '00ffxx', balance: 'balance!'},
  { dateMoviment: 'Oxygen', coin: 15.9994, proft: 'O', profitPercentage: '00ffxx', balance: 'balance!'},
  { dateMoviment: 'Fluorine', coin: 18.9984, proft: 'F', profitPercentage: '00ffxx', balance: 'balance!'},
  { dateMoviment: 'Neon', coin: 20.1797, proft: 'Ne', profitPercentage: '00ffxx', balance: 'balance!'},
];

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }]
})
export class DatatableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() searcher;

  displayedColumns: string[] = ['dateMoviment', 'coin', 'proft', 'profitPercentage', 'balance'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.searcher.onkeyup = (event) => {
      this.applyFilter(event.target.value);
    };
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
