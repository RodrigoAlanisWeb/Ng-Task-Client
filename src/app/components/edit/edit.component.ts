import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup 
  error: boolean
  task: any
  id: any

  constructor(
    private _fb: FormBuilder,
    private _service: TaskService,
    private _route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this._fb.group({
      "title":['',Validators.compose([Validators.required,Validators.minLength(5)])],
      "content": ['',Validators.compose([Validators.required,Validators.minLength(5)])],
    })
    this.id = _route.snapshot.paramMap.get('id')
    this.task = {}
    this._service.getOne(this.id).subscribe(
      res => {
        if (!res.task) {
          router.navigate(['/tasks'])
        }
        this.task = res.task
        this.form = this._fb.group({
          "title":[this.task.title,Validators.compose([Validators.required,Validators.minLength(5)])],
          "content": [this.task.content,Validators.compose([Validators.required,Validators.minLength(5)])],
        })
      },
      err => {
        router.navigate(['/tasks'])
      }
    ) 
    this.error = false
  }

  ngOnInit(): void {
  }

  submit(data: Object) {
    this._service.update(this.id,data).subscribe(
      res => {
        this.router.navigate(['/'])
      },
      err => {
        this.error = true
      }
    )
  }

}
