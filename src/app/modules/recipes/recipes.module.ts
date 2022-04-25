import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';

@NgModule({
  declarations: [RecipesComponent, NavbarComponent, RecipesListComponent, RecipeItemComponent],
  imports: [CommonModule, RecipesRoutingModule],
})
export class RecipesModule {}
