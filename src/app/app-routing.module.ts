import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'',component:HomeComponent} ,
  {path:'home',component:HomeComponent},
   {path:'dialog-example',component:DialogExampleComponent},
   {path:'header',component:HeaderComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
