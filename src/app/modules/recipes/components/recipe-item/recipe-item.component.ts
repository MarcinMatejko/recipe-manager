import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { RecipeResource } from 'src/app/data/recipes-interfaces';
import { RecipesResourceService } from 'src/app/data/recipes-resource.service';
import { ConfirmModalComponent } from '../../modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit, OnDestroy {
  recipe$: Observable<RecipeResource>;
  termSubscriber: Subscription;
  selectedId: string;

  constructor(
    private route: ActivatedRoute,
    private recipesResourceService: RecipesResourceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listenForParamsChange();
  }

  listenForParamsChange(): void {
    this.termSubscriber = this.route.params
      .pipe(
        switchMap((res) => {
          this.selectedId = res['recipeId'];
          return (this.recipe$ = this.recipesResourceService.getRecipeById(
            this.selectedId
          ));
        })
      )
      .subscribe();
  }

  deleteRecipe(recipe: RecipeResource): void {
    this.dialog.open(ConfirmModalComponent, { data: recipe });
  }

  ngOnDestroy() {
    this.termSubscriber.unsubscribe();
  }
}
