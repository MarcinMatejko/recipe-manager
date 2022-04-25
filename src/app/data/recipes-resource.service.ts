import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RecipeResource } from './recipes-interfaces';

@Injectable({
  providedIn: 'root',
})
export class RecipesResourceService {
  API_ENDPOINT = environment.api_endpoint + '/recipes';

  constructor(private httpClient: HttpClient) {}

  postNewRecipe(): Observable<RecipeResource> {
    const newRecipe: RecipeResource = {
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
    return this.httpClient.get<RecipeResource[]>(`${this.API_ENDPOINT}`);
  }
}
