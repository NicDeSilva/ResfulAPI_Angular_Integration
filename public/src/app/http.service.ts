import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { 
    this.getTask('5c91514a4f85da2ea015eeaf');
  }

  getTasks() {
    return this._http.get('/api/tasks');
  }
  getTask(id) {
    let tempObservable = this._http.get(`/api/tasks/${id}`);
    tempObservable.subscribe(data => console.log("Specific task:", data));
  }
}
