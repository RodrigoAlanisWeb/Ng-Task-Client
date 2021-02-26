import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  form: FormGroup
  error: boolean
  tasks: any 

  constructor(
    private _fb: FormBuilder,
    private _service: TaskService
  ) {
    this.form = this._fb.group({
      "title":['',Validators.compose([Validators.required,Validators.minLength(5)])],
      "content": ['',Validators.compose([Validators.required,Validators.minLength(5)])],
    })
    this.error = false

    this.tasks = []
    this.init()
  }

  ngOnInit(): void {
  }

  init() {
    this._service.getAll().subscribe(
      res => {
        this.tasks = res.data.tasks
      },
    )
  }

  submit(data: Object) {
    this._service.create(data).subscribe(
      res => {
        this.error = false
        this.form.reset()
        this.init()
      },
      err => {
        this.error = true
      }
    )
  }

  delete(id: number) {
    this._service.delete(id).subscribe(
      res => {
        this.init()
      },
    )
  }

  done(id: number) {
    this._service.done(id).subscribe(
      res => {
        this.init()
      },
    )
  }

}
