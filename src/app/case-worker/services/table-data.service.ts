import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private http: HttpClient) { }

  // getTableData() {
  //   return this.http.get('./assets/mock/tableValues.json');
  //   // let url="https://jsonplaceholder.typicode.com/todos/";
  //   // return this.http.get(url);
  // }
}
