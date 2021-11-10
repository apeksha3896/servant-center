import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private http: HttpClient) { }

  getTransportRequestFormData() {
    return this.http.get('./assets/mock/transportdata.json');
  }

  // getTableData() {
  //     return this.http.get('./assets/mock/tableValues.json');
  //     // let url="https://jsonplaceholder.typicode.com/todos/";
  //     // return this.http.get(url);
  //   }
}
