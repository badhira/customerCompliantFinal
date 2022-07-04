import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  user = {
    uname: '',
    password: ''
  }

  submitted = false
  hide = true
  signUpSubmitted = false
  signUpHide = true

  role = [{ id: 1, name: 'Admin' }, { id: 2, name: 'Service Agent' }, { id: 3, name: 'Customer' }]

  constructor(private fb: FormBuilder, private _auth: AuthService) { }
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  signUpForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age: ['', [Validators.required]],
    gender: ['male', [Validators.required]],
    role: [3, [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],

  }, {
    Validator: () => {

      if (this.signUpForm?.controls['password'].value != this.signUpForm?.controls['confirmPassword'].value)
        console.log('inside condition')
      this.signUpForm.controls?.['confirmPassword'].setErrors({ passwordMissmatch: true })
      console.log('helo', this.signUpForm)
    }
  })

  get AllControls() {
    return this.loginForm.controls
  }


  get AllControlsForSignUp() {
    return this.signUpForm.controls
  }

  onSubmit(values: any) {
    this.submitted = true
    console.log({ values })

  }

  onSubmitSignUp(values: any) {
    this.signUpSubmitted = true
    console.log({ values })
  }
  // ict login
  // loginUser()
  // {
  //   this._auth.loginUser(this.user)
  // }
  ngOnInit(): void {
  }



}
