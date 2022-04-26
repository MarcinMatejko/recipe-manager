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
  @Output() editRecipeEvent = new EventEmitter<RecipeResource>();
  @Output() addNewRecipeEvent = new EventEmitter<boolean>();
  @Output() showDetailsRecipeEvent = new EventEmitter<boolean>();
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
  }

  showSelectedRecipe(recipeId: string): void {
    this.selectedRecipeId = recipeId;
    this.showDetailsRecipeEvent.emit(true);
  }

  deleteRecipe(recipe: RecipeResource): void {
    this.dialog.open(ConfirmModalComponent, { data: recipe });
  }

  editRecipe(recipe: RecipeResource): void {
    this.editRecipeEvent.emit(recipe);
  }

  addNewRecipe(): void {
    this.addNewRecipeEvent.emit(true);
  }
}
