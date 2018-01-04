import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Berry} from "../models/Berry";

@Injectable()
export class BerryRestServiceService {

  path = 'http://localhost:8080/berries';

  constructor(private http: HttpClient) {
  };

  getAll(): Observable<Berry[]> {
    return this.http.get<Berry[]>(this.path);
  };

  getById(id: number): Observable<Berry> {
    return this.http.get<Berry>(this.path + '/' + id);
  };

  save(berry: Berry): Observable<any> {
    return this.http.post(this.path, berry);
  };

  delete(id: number): Observable<any> {
    return this.http.delete<Berry[]>(this.path + '/' + id);
  };

  getWinesByBerry(berryId: number): Observable<Berry[]> {
    return this.http.get<Berry[]>(this.path + '/' + berryId + '/wines');
  };

}
