import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {
    form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
  });
  // form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  get firstname() {
    return this.form.get('firstName');
  }

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', Validators.required, Validators.email],
    //   password: ['', Validators.required, Validators.minLength(6)]
    // });
  }
  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }

}
