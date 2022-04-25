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

@NgModule({
  declarations: [
    RecipesComponent,
    NavbarComponent,
    RecipesListComponent,
    RecipeItemComponent,
    AuthorModalComponent,
    ConfirmModalComponent,
  ],
  imports: [CommonModule, RecipesRoutingModule, MatDialogModule],
})
export class RecipesModule {}
