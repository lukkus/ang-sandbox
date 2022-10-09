import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormModel } from './models/form.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public model: FormModel = {
    name: "",
    anyFlag: false,
    age: 0,
    objectId: 0
  };

  public form = this.fb.group({
    "name": [""],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmitTemplateForm(): void {
    console.log("template form submitted: ", this.model);
  }

  public onSubmitReactiveForm(): void {
    console.log("reactive form submitted: ", this.form);
  }
}
