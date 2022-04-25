import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RecipeResource } from 'src/app/data/recipes-interfaces';
import { RecipesResourceService } from 'src/app/data/recipes-resource.service';
import { ConfirmModalComponent } from '../../modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes$: Observable<RecipeResource[]>;
  selectedRecipeId: string;

  constructor(
    private recipesResourceService: RecipesResourceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes(): void {
    this.recipes$ = this.recipesResourceService.getAllRecipes();
    // this.recipes$.subscribe((res) => console.log('all recipes', res));
  }

  showSelectedRecipe(recipeId: string): void {
    this.selectedRecipeId = recipeId;
    console.log('selectedRecipeId', this.selectedRecipeId);
  }

  deleteRecipe(recipe: RecipeResource): void {
    this.dialog.open(ConfirmModalComponent, { data: recipe });
    // this.recipesResourceService.deleteRecipeById(recipeId).subscribe((res) => console.log("res"))
  }
}
