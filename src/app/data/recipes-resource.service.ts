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

  postNewRecipe(): Observable<RecipeResource> {
    const newRecipe: RecipeResource = {
      _id: 'asdasd',
      name: 'Zaupa Pomidorowa',
      preparationTimeInMinutes: 50,
      description: 'Klasyczne polskie danie. Każdy zna i lubi',
      ingredients: [
        {
          _id: '1',
          name: 'Kość na zupę',
          quantity: '1',
        },
        {
          _id: '2',
          name: 'Pomidory',
          quantity: '4',
        },
        {
          _id: '3',
          name: 'Cebula',
          quantity: '2',
        },
      ],
    };
    return this.httpClient.post<RecipeResource>(
      `${this.API_ENDPOINT}`,
      newRecipe
    );
  }

  getAllRecipes(): Observable<RecipeResource[]> {
    return of(this.mockRecipes);
    // return this.httpClient.get<RecipeResource[]>(`${this.API_ENDPOINT}`);
  }

  getRecipeById(recipeId: string): Observable<RecipeResource> {
    const selectedRecipe = this.mockRecipes.filter(
      (item) => item._id === recipeId
    );
    return of(selectedRecipe[0]);
    // return this.httpClient.get<RecipeResource>(
    //   `${this.API_ENDPOINT}/${recipeId}`
    // );
  }

  editRecipe(editedRecipe: RecipeResource): Observable<RecipeResource> {
    return this.httpClient.put<RecipeResource>(
      `${this.API_ENDPOINT}/${editedRecipe._id}`,
      editedRecipe
    );
  }

  deleteRecipeById(recipeId: string): Observable<RecipeResource> {
    console.log('delete in service', recipeId);
    return this.httpClient.delete<RecipeResource>(`jakisurlDoUsuniecia`);
    // return this.httpClient.delete<RecipeResource>(`${this.API_ENDPOINT}/${recipeId}`)
  }
}
