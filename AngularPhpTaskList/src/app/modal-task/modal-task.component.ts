import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Task } from '../interfaces/interfaces';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.css']
})
export class ModalTaskComponent implements OnInit {
  form: FormGroup;
  @Output() newItemEvent = new EventEmitter<Task>();

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void { }


  addTask(): void {
    const task: Task = {
      id: 0,
      title: this.form.value.name,
      description: this.form.value.description,
      status: false,
      created_at: new Date(),
      updated_at: new Date(),
      category_id: 0,
    };
    this.newItemEvent.emit(task);
  }

}
