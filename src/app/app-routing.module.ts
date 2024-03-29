import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { RegostrationComponent } from './pages/regostration/regostration.component';
import { ProfessionalProfilePageComponent } from './pages/professional-profile-page/professional-profile-page.component';
import { SuccessfulMsgComponent } from './shared/components/successful-msg/successful-msg.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'categories', component: CategoriesComponent},
  {path : 'applications', component : ApplicationsComponent},
  {path : 'tag/:tag', component : CategoriesComponent},
  {path : 'professionals/:id', component: ProfessionalProfilePageComponent}, 
  {path : 'authorization', component: AuthorizationComponent},
  {path: 'registration' , component: RegostrationComponent},
  {path: 'successful' , component: SuccessfulMsgComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
