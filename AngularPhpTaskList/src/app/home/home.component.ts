import { Component, OnInit } from '@angular/core';
import { User, Category, Task } from '../interfaces/interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedTask?: Task;

  exampleUser: User = {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    email_verified_at: new Date('2023-05-12T14:20:00Z'),
    created_at: new Date('2023-05-01T09:00:00Z'),
    updated_at: new Date('2023-06-15T10:30:00Z'),
  };

  exampleCategory1: Category = {
    id: 101,
    name: 'Trabajo',
    created_at: new Date('2023-04-20T08:00:00Z'),
    updated_at: new Date('2023-06-10T12:00:00Z'),
    owner_id: this.exampleUser.id,
  };

  exampleCategory2: Category = {
    id: 102,
    name: 'Personal',
    created_at: new Date('2023-05-05T07:00:00Z'),
    updated_at: new Date('2023-06-12T14:00:00Z'),
    owner_id: this.exampleUser.id,
  };

  exampleTasks: Task[] = [
    {
      id: 1001,
      title: 'Finalizar informe mensual',
      description: 'Revisar los datos y finalizar el informe para la reunión de mañana',
      status: false,
      created_at: new Date('2023-09-05T15:00:00Z'),
      updated_at: new Date('2023-10-01T16:00:00Z'),
      category_id: this.exampleCategory1.id,
    },
    {
      id: 1002,
      title: 'Comprar leche',
      description: 'No olvidar comprar leche después del trabajo',
      status: true,
      created_at: new Date('2023-10-03T10:00:00Z'),
      updated_at: new Date('2023-10-03T18:00:00Z'),
      category_id: this.exampleCategory2.id,
    }
  ];

  constructor() { }

  openModal(task: Task): void {
    this.selectedTask = task;
    let modal = document.getElementById('modalId');
    setTimeout(() => {
      modal = document.getElementById('modalId');
      modal?.click();
    }, 1000);
    console.log(modal);

  }

  ngOnInit(): void { }

  addTask($event: any) {
    this.exampleTasks.push($event);
  }


} 
