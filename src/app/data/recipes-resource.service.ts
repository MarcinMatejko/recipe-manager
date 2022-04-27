import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { RecipeResource } from './recipes-interfaces';

@Injectable({
  providedIn: 'root',
})
export class RecipesResourceService {
  API_ENDPOINT = environment.api_endpoint + '/recipes';

  recipes$ = new BehaviorSubject<RecipeResource[]>(null);

  constructor(private httpClient: HttpClient) {}

  getAllRecipes(): Observable<RecipeResource[]> {
    return this.httpClient.get<RecipeResource[]>(`${this.API_ENDPOINT}`).pipe(
      switchMap((res) => {
        this.recipes$.next(res);
        return this.recipes$.asObservable();
      })
    );
  }

  refreshRecipes(): void {
    this.httpClient
      .get(this.API_ENDPOINT)
      .subscribe((res: any) => this.recipes$.next(res));
  }

  getRecipeById(recipeId: string): Observable<RecipeResource> {
    return this.httpClient.get<RecipeResource>(
      `${this.API_ENDPOINT}/${recipeId}`
    );
  }

  postNewRecipe(newRecipe: RecipeResource): Observable<RecipeResource> {
    return this.httpClient.post<RecipeResource>(
      `${this.API_ENDPOINT}`,
      newRecipe
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
