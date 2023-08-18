import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule,MatSidenavContent} from '@angular/material/sidenav';
// import {  } from '@angular/material/sidenav'; 

    












@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent,
    HeaderComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    AppRoutingModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
