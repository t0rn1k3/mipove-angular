import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

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
import { AuthComponent } from './components/auth/auth.component';
import { RegComponent } from './components/reg/reg.component';
import { CategoryContainerComponent } from './components/category-container/category-container.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommentsService } from "./services/comments.service";
import { NoSanitizePipe } from "./pipe/nosanitize.pipe";


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import { CommentsComponent } from './components/comments/comments.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentComponent } from './components/comment/comment.component';
import { ApplicationsContainerComponent } from './components/applications-container/applications-container.component';
import { WarningMessageComponent } from './components/warning-message/warning-message.component';

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
        MainBannerComponent,
        AuthComponent,
        RegComponent,
        CategoryContainerComponent,
        UserProfileComponent,
        ContactContainerComponent,
        CommentsComponent,
        CommentFormComponent,
        CommentComponent,
        NoSanitizePipe,
        ApplicationsContainerComponent,
        WarningMessageComponent,
    ],
    imports : [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatIconModule
    ],
    exports : [
        HeaderComponent,
        LeadersContainerComponent,
        CategoryContainerComponent,
        AboutUsComponent,
        ContactContainerComponent,
        MainBannerComponent,
        AuthComponent,
        RegComponent,
        UserProfileComponent,
        CommentsComponent,
        ApplicationsContainerComponent,
        WarningMessageComponent,
        UserCardComponent
    ],
    providers: [
        CommentsService
    ]
})

export class sharedModule{

}