import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  tasks:any;
  constructor(private _httpService: HttpService){}
  
  getTasks = () => {
    let tempObservable = this._httpService.getTasks()
    tempObservable.subscribe(data => {
      console.log(data);
      this.tasks = data;
    })
  };

  ngOnInit(){
    this.getTasks();
  }
};

