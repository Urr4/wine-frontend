import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Wine} from "../models/Wine";
import {Berry} from "../models/Berry";
import {User} from "../models/User";

@Injectable()
export class WineRestServiceService {

  path = 'http://localhost:8080/wines';

  constructor(private http: HttpClient) {
  };

  getAll(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.path);
  };

  getById(id:number): Observable<Wine> {
    return this.http.get<Wine>(this.path+'/'+id);
  };

  save(wine:Wine):Observable<any> {
    return this.http.post(this.path, wine);
  };

  delete(id:number):Observable<any> {
    return this.http.delete(this.path+'/'+id);
  };

  addBerryToWine(wineId:number, berry:Berry):Observable<any>{
    return this.http.put(this.path+'/'+wineId+'/berries', berry);
  };

  removeBerryFromWine(wineId:number, berryId:number):Observable<any>{
    return this.http.delete(this.path+'/'+wineId+'/berries/'+berryId);
  };

  getUsersByWine(wineId:number): Observable<User[]>{
    return this.http.get<User[]>(this.path+'/'+wineId+'/users');
  };

}
