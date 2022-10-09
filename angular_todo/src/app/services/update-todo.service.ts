import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateTodoService {
  public con = this.connection.server;
  headers = new HttpHeaders();
  constructor(
    private connection: ConnectionService,
    private _http:HttpClient
  ) { }

  updateToDo(task:any) {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(`${this.con}/todo/${task._id}`, { task});
  }

}
