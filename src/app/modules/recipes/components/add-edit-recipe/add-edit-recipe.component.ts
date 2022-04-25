import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss'],
})
export class AddEditRecipeComponent implements OnInit {
  addEditForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.generateAddEditForm();
  }

  generateAddEditForm(): void {
    this.addEditForm = new FormGroup({
      name: new FormControl([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80),
      ]),
      preparationTimeInMinutes: new FormControl([Validators.required]),
      description: new FormControl([
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(255),
      ]),
      ingredients: new FormArray([new FormControl(null)]),
    });
  }
}
