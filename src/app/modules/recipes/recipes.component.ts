import { Component, OnInit } from '@angular/core';
import { RecipesResourceService } from 'src/app/data/recipes-resource.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  constructor(private recipesResourceService: RecipesResourceService) {}

  ngOnInit(): void {}

  addNewRecipe(): void {
    this.recipesResourceService
      .postNewRecipe()
      .subscribe((res) => console.log('res', res));
  }

  // getAllRecipes(): void {
  //   this.recipesResourceService
  //     .getAllRecipes()
  //     .subscribe((res) => console.log('res', res));
  // }
}
