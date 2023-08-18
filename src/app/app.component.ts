import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  opened=false;
  // dialog:any = MatDialog
  constructor(public dialog: MatDialog){}
  opendialog(){
    this.dialog.open(DialogExampleComponent);
  }
}
