import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { RecipeResource } from './recipes-interfaces';
import { mockRecipes } from './mock-recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipesResourceService {
  API_ENDPOINT = environment.api_endpoint + '/recipes';
  mockRecipes: RecipeResource[] = mockRecipes;

  constructor(private httpClient: HttpClient) {}

  postNewRecipe(newRecipe: RecipeResource): Observable<RecipeResource> {
    return this.httpClient.post<RecipeResource>(
      `${this.API_ENDPOINT}`,
      newRecipe
    );
  }

  getAllRecipes(): Observable<RecipeResource[]> {
    return this.httpClient.get<RecipeResource[]>(`${this.API_ENDPOINT}`);
  }

  getRecipeById(recipeId: string): Observable<RecipeResource> {
    return this.httpClient.get<RecipeResource>(
      `${this.API_ENDPOINT}/${recipeId}`
    );
  }

  editRecipe(editedRecipe: RecipeResource): Observable<RecipeResource> {
    return this.httpClient.put<RecipeResource>(
      `${this.API_ENDPOINT}/${editedRecipe._id}`,
      editedRecipe
    );
  }

  deleteRecipeById(recipeId: string): Observable<RecipeResource> {
    return this.httpClient.delete<RecipeResource>(
      `${this.API_ENDPOINT}/${recipeId}`
    );
  }
}
