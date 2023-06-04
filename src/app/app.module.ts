import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { sharedModule } from './shared/shared.module';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { RegostrationComponent } from './pages/regostration/regostration.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HttpClientModule } from '@angular/common/http';

import { APP_INITIALIZER } from '@angular/core';

import { TranslateService } from './shared/services/translate.service';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { translatePipe } from './shared/pipe/translate.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environments';

export function setupTranslateServiceFactory(
  service: TranslateService): Function {
return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    RegostrationComponent,
    MainPageComponent,
    CategoriesComponent,
    ApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    sharedModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports : [
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateServiceFactory,
      deps: [
        TranslateService
      ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
