import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  title = 'angular-formarray-example';

  items: TestModel[] = [
    {
      name: 'JavaScript',
      checked: false,
      intermediate: false
    },
    {
      name: 'Angular',
      checked: true,
      intermediate: false
    },
    {
      name: 'React',
      checked: false,
      intermediate: true
    },
    {
      name: 'C#',
      checked: true,
      intermediate: false
    },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      skills: this.fb.array([])
    });
    //this.formInit();
    this.addSkillsToForm(this.items);
  }

  formInit() {
    this.form = this.fb.group({
      skills: this.fb.array([
        this.fb.group({
          name: ['JavaScript'],
          checked: [true],
        }),
        this.fb.group({
          name: ['Angular'],
          checked: [false],
        }),
        this.fb.group({
          name: ['React Js'],
          checked: [true],
        }),
      ]),
    });

    console.log(this.form.getRawValue());
  }

  get skillsFormArray() {
    return (this.form.get('skills') as FormArray);
  }

  addSkillsToForm(skillsData: TestModel[]) {
    skillsData.forEach(skill => {
      const skillGroup = this.fb.group({
        name: [skill.name],
        checked: [skill.checked],
        intermediate: [skill.intermediate]
      });
      this.skillsFormArray.push(skillGroup);
    });
  }

  public get skills() {
    return this.form.get('skills') as FormArray;
  }

  onChange(event:any, skill:TestModel) {
    const isChecked = event.checked
    console.log("On change: ", isChecked, skill);
    if (!isChecked && skill.name === "Angular") {
      const index = this.skillsFormArray.controls.findIndex((control: any) => control.value === skill);
      if (index !== -1) {
        this.skillsFormArray.at(index).get('intermediate')?.setValue(true);
      }
    }

  }
}

class TestModel {
  name: string;
  checked: boolean;
  intermediate: boolean;
}
