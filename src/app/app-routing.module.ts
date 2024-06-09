import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
// import { TabledataComponent } from './components/tabledata/tabledata.component';
import { DatatableComponent } from './Components/datatable/datatable.component';
import { FilterdataComponent } from './filterdata/filterdata.component';
import { MergedArrayComponent } from './merged-array/merged-array.component';
import { PracticeConceptsComponent } from './practice-concepts/practice-concepts.component';


const routes: Routes = [
  // {path:'',component:DatatableComponent},

  { path: '', component: PracticeConceptsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dialog-example', component: DialogExampleComponent },
  { path: 'header', component: HeaderComponent },
  //  {path:'tabledataAspdf',component:TabledataComponent},
  { path: 'filter', component: FilterdataComponent },
  { path: 'merged-array', component: MergedArrayComponent },
  {
    path: 'admin',
    loadChildren: () => import('./dashboard-admin/dashboard-admin.module')
      .then(m => m.DashboardAdminModule)
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
