import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../must-match/must-match.validator';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {
//     form = new FormGroup({
//       firstName: new FormControl('', Validators.required),
//       lastName: new FormControl('', Validators.required),
//       email: new FormControl('', [
//         Validators.required,
//         Validators.pattern('(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)')
//       ]),
//       password: new FormControl('', [
//         Validators.required,
//         Validators.minLength(6)
//       ]),
//       confirmPassword: new FormControl('' , Validators.required)
//   }, {
//       validator: MustMatch('password', 'confirmPassword')
// });
  form: FormGroup;
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    } , {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }

}
