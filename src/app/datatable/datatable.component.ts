import {Component, Inject, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from '@angular/material';
import {MovimentService} from '../services/moviment.service';
import {MovimentsModel} from '../services/Moviments.model';
import {BehaviorSubject, Observable} from 'rxjs';

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

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css'],
    providers: [
        { provide: MatPaginatorIntl, useClass: PaginatorIntlService },
        MovimentService
    ]
})
export class DatatableComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @Input() searcher;

    private moviments: Observable<MovimentsModel[]>;

    displayedColumns: string[] = ['dateMoviment', 'coin', 'proft', 'profitPercentage', 'balance'];
    dataSource: MatTableDataSource<MovimentsModel[]>;

    constructor(private movimentService: MovimentService) {

        this.dataSource = new MatTableDataSource([]);
        this.fillTable();
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.searcher.onkeyup = (event) => {
            this.applyFilter(event.target.value);
        };
    }

    fillTable() {
        this.moviments = this.movimentService.movements();

        this.moviments.subscribe((response) => {
            let processData = [];
            response
                .sort((a, b) => {
                    a.dateMoviment = new Date(a.dateMoviment);
                    b.dateMoviment = new Date(b.dateMoviment);

                    if (a.dateMoviment < b.dateMoviment) {
                        return -1;
                    } else if (a.dateMoviment > b.dateMoviment) {
                        return 1;
                    } else {
                        return 0;
                    }
                })
                .reduce((prev, curr) => {
                    curr.proft = parseFloat(curr.proft.toString());
                    curr.balance = curr.proft;

                    if ( prev ) {
                        curr.balance += prev.balance;
                    }

                    processData.push(
                        new MovimentsModel(
                            curr.dateMoviment,
                            curr.coin,
                            curr.proft,
                            curr.profitPercentage,
                            curr.balance
                        )
                    );

                    return curr;
                }, null);

            this.dataSource.data = processData;
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
