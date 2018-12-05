import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  // position: number;
  dateMoviment: string;
  coin: number;
  proft: string;
  profitPercentage: string;
  balance: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, dateMoviment: 'Hydrogen', coin: 1.0079, proft: 'H', profitPercentage: '00ffxx'},
  // {position: 2, dateMoviment: 'Helium', coin: 4.0026, proft: 'He', profitPercentage: '00ffxx'},
  // {position: 3, dateMoviment: 'Lithium', coin: 6.941, proft: 'Li', profitPercentage: '00ffxx'},
  // {position: 4, dateMoviment: 'Beryllium', coin: 9.0122, proft: 'Be', profitPercentage: '00ffxx'},
  // {position: 5, dateMoviment: 'Boron', coin: 10.811, proft: 'B', profitPercentage: '00ffxx'},
  // {position: 6, dateMoviment: 'Carbon', coin: 12.0107, proft: 'C', profitPercentage: '00ffxx'},
  // {position: 7, dateMoviment: 'Nitrogen', coin: 14.0067, proft: 'N', profitPercentage: '00ffxx'},
  // {position: 8, dateMoviment: 'Oxygen', coin: 15.9994, proft: 'O', profitPercentage: '00ffxx'},
  // {position: 9, dateMoviment: 'Fluorine', coin: 18.9984, proft: 'F', profitPercentage: '00ffxx'},
  // {position: 10, dateMoviment: 'Neon', coin: 20.1797, proft: 'Ne', profitPercentage: '00ffxx'},
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

  // "dateMoviment": "2018-05-23 12:06:01",
  // "coin": "BTC",
  // "proft": "6.944116",
  // "profitPercentage": 84

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  // displayedColumns: string[] = ['Data', 'Moeda', 'Rendimento', '%', 'Saldo'];
  displayedColumns: string[] = ['dateMoviment', 'coin', 'proft', 'profitPercentage', 'balance'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
