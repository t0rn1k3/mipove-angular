import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { LeadersContainerComponent } from './components/leaders-container/leaders-container.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactContainerComponent } from './components/contact-container/contact-container.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ButtonComponent } from './components/button/button.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { translatePipe } from "./pipe/translate.pipe";
import { MainBannerComponent } from './components/main-banner/main-banner.component';

@NgModule({
    declarations : [
        HeaderComponent,
        NavbarComponent,
        LoginComponent,
        LanguagesComponent,
        UserCardComponent,
        CategoryCardComponent,
        LeadersContainerComponent,
        AboutUsComponent,
        ContactContainerComponent,
        InputComponent,
        TextareaComponent,
        ButtonComponent,
        ContactDetailsComponent,
        translatePipe,
        MainBannerComponent
    ],
    imports : [
        CommonModule
    ],
    exports : [
        HeaderComponent,
        LeadersContainerComponent,
        CategoryCardComponent,
        AboutUsComponent,
        ContactContainerComponent,
        MainBannerComponent
    ],
})

export class sharedModule{

}