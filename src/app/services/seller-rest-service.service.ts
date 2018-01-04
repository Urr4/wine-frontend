import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Seller} from "../models/Seller";
import {Wine} from "../models/Wine";

@Injectable()
export class SellerRestServiceService {

  path = 'http://localhost:8080/sellers';

  constructor(private http: HttpClient) {
  };

  getAll(): Observable<Seller[]> {
    return this.http.get<Seller[]>(this.path);
  };

  getById(id: number): Observable<Seller> {
    return this.http.get<Seller>(this.path + '/' + id);
  };

  save(seller: Seller): Observable<any> {
    return this.http.put(this.path, seller);
  };

  delete(id: number): Observable<any> {
    return this.http.delete(this.path + '/' + id);
  };

  addWineToSeller(sellerId: number, wine: Wine): Observable<any> {
    return this.http.put(this.path + '/' + sellerId + '/wines', wine);
  }

  removeWineFromSeller(sellerId: number, wineId: number): Observable<any> {
    return this.http.delete(this.path + '/' + sellerId + '/wines/' + wineId);
  };

}
