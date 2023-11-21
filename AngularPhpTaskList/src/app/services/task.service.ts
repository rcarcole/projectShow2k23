import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpclient: HttpClient) { }

  getAllTasks() {
    return this.httpclient.get('http://localhost/api/tasks');
  }

  createTask(task: any) {
    return this.httpclient.post('http://localhost/api/tasks', task);
  }

  updateTask(task: any) {
    return this.httpclient.put('http://localhost/api/tasks/' + task.id, task);
  }

  deleteTask(task: any) {
    return this.httpclient.delete('http://localhost/api/tasks/' + task.id);
  }
}
