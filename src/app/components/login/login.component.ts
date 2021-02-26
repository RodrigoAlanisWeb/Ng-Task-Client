import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _service: AuthService
  ) {
    this.form = this._fb.group({
      "email": ['',Validators.compose([Validators.required,Validators.email])],
      "password": ['', Validators.compose([Validators.required,Validators.minLength(5)])]
    })
  }

  ngOnInit(): void {
  }

  submit(data: Object) {
    this._service.login(data).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('user',res)
      },
      err => {
        console.log(err);
      }
    )
  }

}
