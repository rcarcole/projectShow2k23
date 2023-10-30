import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Task } from '../interfaces/interfaces';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.css']
})
export class ModalTaskComponent implements OnInit {
  @Input() task!: any;
  form: FormGroup;
  @Output() newItemEvent = new EventEmitter<Task>();

  constructor(private fb: FormBuilder) {
    this.form = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
    console.log(this.task);
    this.form = this.fb.group({
      name: [this.task ? this.task.title : ''],
      description: [this.task ? this.task.description : '']
    });
  }


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