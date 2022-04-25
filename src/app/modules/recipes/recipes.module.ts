import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { AuthorModalComponent } from './modals/author-modal/author-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipesComponent,
    NavbarComponent,
    RecipesListComponent,
    RecipeItemComponent,
    AuthorModalComponent,
    ConfirmModalComponent,
    AddEditRecipeComponent,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RecipesModule {}
