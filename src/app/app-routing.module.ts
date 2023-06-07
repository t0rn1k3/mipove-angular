import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { RegostrationComponent } from './pages/regostration/regostration.component';
import { ProfessionalsPageComponent } from './pages/professionals-page/professionals-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'categories', component: CategoriesComponent},
  {path : 'applications', component : ApplicationsComponent},
  {path : 'authorization', component: AuthorizationComponent},
  {path: 'registration' , component: RegostrationComponent},
  {path:  'professionals/:id', component : ProfessionalsPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
