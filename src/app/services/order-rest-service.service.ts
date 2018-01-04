import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Order} from "../models/Order";

@Injectable()
export class OrderRestServiceService {

  path = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {
  };

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.path);
  };

  getById(id: number): Observable<Order> {
    return this.http.get<Order>(this.path+'/'+id);
  };

  save(order: Order): Observable<any> {
    return this.http.post(this.path, order);
  };

  delete(id: number): Observable<any> {
    return this.http.delete(this.path+'/'+id);
  };

}
