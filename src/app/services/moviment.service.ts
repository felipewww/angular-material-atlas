import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {MovimentsModel} from './Moviments.model';
import {Observable} from 'rxjs';
import {map, reduce} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovimentService {

  constructor(private http: Http) {
  }

  movements(): Observable<MovimentsModel[]> {
    let data = this.http.get('http://www.mocky.io/v2/5b2c010d300000100023487a').pipe( map(response => response.json()) );
    return data;
  }
}
