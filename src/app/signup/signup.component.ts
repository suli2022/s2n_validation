import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    username: new FormControl('', Validators.required ),
    password: new FormControl(''),
    password_again: new FormControl('')

  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('működik')
  }
}
