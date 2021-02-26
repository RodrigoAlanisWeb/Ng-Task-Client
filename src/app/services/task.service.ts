import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  api_url: String = "http://localhost:3000/api/task/"

  constructor(
    private _http: HttpClient
  ) { }

  create(data: Object): Observable<any> {
    return this._http.post(this.api_url + "create",data,{
      headers: {
        'x-access-token': localStorage.getItem('user') || ""
      }
    })
  }

  getAll(): Observable<any> {
    return this._http.get(this.api_url + "tasks",{
      headers: {
        'x-access-token': localStorage.getItem('user') || ""
      }
    })
  }

  delete(id: number): Observable<any> {
    return this._http.delete(this.api_url + "delete/" + id,{
      headers: {
        'x-access-token': localStorage.getItem('user') || ""
      }
    })
  }

  done(id: number): Observable<any> {
    return this._http.get(this.api_url + "done/" + id,{
      headers: {
        'x-access-token': localStorage.getItem('user') || ""
      }
    })
  }

  getOne(id: number): Observable<any> {
    return this._http.get(this.api_url + "get/" + id,{
      headers: {
        'x-access-token': localStorage.getItem('user') || ""
      }
    })
  }

  update(id: number,data: Object): Observable<any> {
    return this._http.put(this.api_url + "update/" + id,data,{
      headers: {
        'x-access-token': localStorage.getItem('user') || ''
      }
    })
  }
}
