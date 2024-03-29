import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { sharedModule } from './shared/shared.module';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { RegostrationComponent } from './pages/regostration/regostration.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import {MatIconModule} from '@angular/material/icon';


import { APP_INITIALIZER } from '@angular/core';

import { TranslateService } from './shared/services/translate.service';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { translatePipe } from './shared/pipe/translate.pipe';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { environment } from 'src/environments/environments';
import { EmailService } from './shared/services/email.service';
import { ProfessionalProfilePageComponent } from './pages/professional-profile-page/professional-profile-page.component';

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
    ApplicationsComponent,
    ProfessionalProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    sharedModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    MatIconModule
  ],
  exports : [
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    EmailService,
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateServiceFactory,
      deps: [
        TranslateService
      ],
      multi: true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
