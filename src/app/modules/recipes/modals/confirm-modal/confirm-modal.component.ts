import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecipeResource } from 'src/app/data/recipes-interfaces';
import { RecipesResourceService } from 'src/app/data/recipes-resource.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: RecipeResource,
    private dialogRef: MatDialogRef<ConfirmModalComponent>,
    private recipesResourceService: RecipesResourceService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  deleteRecipeById(): void {
    this.recipesResourceService
      .deleteRecipeById(this.data._id)
      .subscribe(() => {
        this.closeDialog();
      });
  }
}
