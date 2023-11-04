import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder } from '@angular/forms';
import { Task } from '../interfaces/interfaces';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.css']
})
export class ModalTaskComponent implements OnInit {
  @Input() task!: any;
  form: UntypedFormGroup;
  @Output() newItemEvent = new EventEmitter<Task>();

  constructor(private fb: UntypedFormBuilder) {
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl(''),
      description: new UntypedFormControl(''),
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