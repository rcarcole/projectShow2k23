import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder } from '@angular/forms';
import { Task } from '../interfaces/interfaces';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.css']
})
export class ModalTaskComponent implements OnInit {
  @Input() task!: any;
  form: UntypedFormGroup;
  @Output() newItemEvent = new EventEmitter<Task>();
  id?: string;

  constructor(private fb: UntypedFormBuilder, public activeModal: NgbActiveModal) {
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl(''),
      description: new UntypedFormControl(''),
    });
  }

  ngOnInit(): void {
    if (!this.task) {
      this.task = {
        title: '',
        description: '',
      };
    }
    console.log(this.task);
    if (this.task.id) {
      this.id = this.task.id;
    }

    this.form = this.fb.group({
      name: [this.task ? this.task.title : ''],
      description: [this.task ? this.task.description : '']
    });
  }


  addTask(): void {
    const task: Task = {
      id: this.id ? this.id : uuidv4(),
      title: this.form.value.name,
      description: this.form.value.description,
      status: this.id ? this.task.status : false,
      created_at: this.id ? this.task.create_at : new Date(),
      updated_at: new Date(),
      category_id: 0,
    };
    this.newItemEvent.emit(task);
    this.activeModal.close();
  }

}