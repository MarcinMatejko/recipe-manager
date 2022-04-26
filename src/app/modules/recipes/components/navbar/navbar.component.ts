import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorModalComponent } from '../../modals/author-modal/author-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}

  openAuthorModal(): void {
    this.dialog.open(AuthorModalComponent);
  }
}
