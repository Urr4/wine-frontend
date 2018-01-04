import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Wine} from "../models/Wine";
import {User} from "../models/User";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserRestServiceService {

  path = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
  };

  getAll():Observable<User[]> {
    return this.http.get<User[]>(this.path);
  };

  getById(id: number):Observable<User> {
    return this.http.get<User>(this.path+'/'+id);
  };

  save(user: User):Observable<any> {
    return this.http.post(this.path, user);
  };

  delete(id: number):Observable<any> {
    return this.http.delete(this.path+'/'+id);
  };

  addWineToUser(userId: number, wine: Wine):Observable<any> {
    return this.http.put(this.path+'/'+userId+'/wines', wine);
  };

  removeWineFromUser(userId: number, wineId: number):Observable<any> {
    return this.http.delete(this.path+'/'+userId+'/wines/'+wineId);
  };

}
