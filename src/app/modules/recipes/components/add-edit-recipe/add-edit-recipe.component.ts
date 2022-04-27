import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeResource } from 'src/app/data/recipes-interfaces';
import { RecipesResourceService } from 'src/app/data/recipes-resource.service';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss'],
})
export class AddEditRecipeComponent implements OnInit {
  @Input() recipeForEdit: RecipeResource;
  @Input() showAddNewRecipeForm: boolean;
  addEditForm: FormGroup;
  isEditForm = false;

  constructor(private recipesResourceService: RecipesResourceService) {}

  ngOnInit(): void {
    this.generateAddEditForm();
    if (this.recipeForEdit) {
      this.isEditForm = true;
      this.addEditForm.patchValue(this.recipeForEdit);
    }
    if (this.showAddNewRecipeForm) {
      this.addEditForm.reset();
      this.isEditForm = false;
    }
  }

  generateAddEditForm(): void {
    this.addEditForm = new FormGroup({
      _id: new FormControl(),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80),
      ]),
      preparationTimeInMinutes: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(255),
      ]),
      ingredients: new FormArray(
        [
          new FormGroup({
            name: new FormControl('', Validators.required),
            quantity: new FormControl('1', Validators.required),
          }),
        ],
        Validators.minLength(2)
      ),
    });
  }

  get ingredients() {
    return this.addEditForm.controls['ingredients'] as FormArray;
  }

  addIngredient() {
    const ingredientForm = new FormGroup({
      name: new FormControl('', Validators.required),
      quantity: new FormControl('1', Validators.required),
    });
    this.ingredients.push(ingredientForm);
  }

  deleteIngredient(ingredientIndex: number) {
    this.ingredients.removeAt(ingredientIndex);
  }

  clearForm(): void {
    this.addEditForm.reset();
  }

  addNewRecipe(): void {
    this.recipesResourceService
      .postNewRecipe(this.addEditForm.value)
      .subscribe((res) => {
        this.recipesResourceService.refreshRecipes();
        this.addEditForm.reset();
      });
  }

  editRecipe(): void {
    this.recipesResourceService
      .editRecipe(this.addEditForm.value)
      .subscribe(() => {
        this.recipesResourceService.refreshRecipes();
      });
  }
}
