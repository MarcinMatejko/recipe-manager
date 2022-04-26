import { Component } from '@angular/core';
import { RecipeResource } from 'src/app/data/recipes-interfaces';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  recipeToEdit: RecipeResource;
  showAddNewRecipeForm: boolean;
  showForm = false;

  showRecipeDetails(): void {
    this.showForm = false;
  }

  editRecipe(event: RecipeResource): void {
    this.recipeToEdit = event;
    this.showForm = true;
  }

  addNewRecipe(event: boolean): void {
    this.showForm = true;
    this.showAddNewRecipeForm = event;
  }
}
