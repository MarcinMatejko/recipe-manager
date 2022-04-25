import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeResource } from 'src/app/data/recipes-interfaces';
import { RecipesResourceService } from 'src/app/data/recipes-resource.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes$: Observable<RecipeResource[]> | undefined;

  constructor(private recipesResourceService: RecipesResourceService) {}

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes(): void {
    this.recipes$ = this.recipesResourceService.getAllRecipes();
    this.recipes$.subscribe((res) => console.log('all recipes', res));
  }
}
