import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _service: AuthService
  ) {
    this.form = this._fb.group({
      "name":['',Validators.compose([Validators.required,Validators.minLength(5)])],
      "email": ['',Validators.compose([Validators.required,Validators.email])],
      "password": ['', Validators.compose([Validators.required,Validators.minLength(5)])]
    })
  }

  ngOnInit(): void {
  }

  submit(data: Object) {
    this._service.signIn(data).subscribe(
      res => {
        localStorage.setItem('user',res.token)
      },
    )
  }

}
