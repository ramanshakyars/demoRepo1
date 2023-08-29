import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'home',component:HomeComponent},
   {path:'dialog-example',component:DialogExampleComponent},
   {path:'header',component:HeaderComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
