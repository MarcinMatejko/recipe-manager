import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-author-modal',
  templateUrl: './author-modal.component.html',
  styleUrls: ['./author-modal.component.scss'],
})
export class AuthorModalComponent {
  constructor(private dialogRef: MatDialogRef<AuthorModalComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
