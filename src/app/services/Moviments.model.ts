import {min} from 'rxjs/operators';

export class MovimentsModel {

  constructor(
    public dateMoviment: Date,
    public coin: string,
    public proft: number,
    public profitPercentage: number,
    public balance: number,
  ) {
  }

  getProcessedDatetime() {
    const day = ( this.dateMoviment.getDate() < 10 ) ? '0' + this.dateMoviment.getDate() : this.dateMoviment.getDate();
    const month = ( this.dateMoviment.getMonth() < 9 ) ? '0' + (this.dateMoviment.getMonth() + 1) : (this.dateMoviment.getMonth() + 1);
    const hour = ( this.dateMoviment.getHours() < 10 ) ? '0' + this.dateMoviment.getHours() : this.dateMoviment.getHours();
    const minutes = ( this.dateMoviment.getMinutes() < 10 ) ? '0' + this.dateMoviment.getMinutes() : this.dateMoviment.getMinutes();
    const year = this.dateMoviment.getFullYear();

    return day + '/' + month + '/' + year + ' ' + hour + ':' + minutes;
  }
}
