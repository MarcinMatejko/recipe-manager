import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RecipesComponent },
  { path: 'recipes/:recipeId', component: RecipesComponent },
  { path: 'recipes/:recipeId/edit', component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
