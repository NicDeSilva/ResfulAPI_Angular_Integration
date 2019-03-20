import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  newTask:any;
  updatedTask:any;
  editTask:any;
  tasks:any;
  constructor(private _httpService: HttpService){}
  
  getTasks = () => {
    let tempObservable = this._httpService.getTasks()
    tempObservable.subscribe(data => {
      console.log(data);
      this.tasks = data;
    })
  };

  createTask = () => {
    let tempObsevable = this._httpService.createTask(this.newTask);
    tempObsevable.subscribe(data => console.log(data));
    this.newTask = { title: "", description: "" },
    this.getTasks();
  }

  deleteTask = (id) => {
    let tempObservable = this._httpService.deleteTask(id);
    tempObservable.subscribe(data => console.log(data));
    this.getTasks();
  }

  updateTask = (id) => {
    let tempObservable = this._httpService.updateTask(id,this.updatedTask);
    tempObservable.subscribe(data => console.log(data));
    this.updatedTask = { title: "", description: "" };
    this.editTask.toggle = false;
    this.getTasks();
  }

  toggleEditForm(id, title, description){
    this.editTask.toggle = !this.editTask.toggle;
    this.editTask.id = id;
    this.updatedTask = { title: title, description: description};
  }

  ngOnInit(){
    this.newTask = { title: "", description: "" };
    this.updatedTask = { title: "", description: "" };
    this.editTask = {toggle: false, id: null}
  }

  subButtonClick(id) {
    let task = document.getElementById(id);
    task.style.visibility = "visible"
  }
};

