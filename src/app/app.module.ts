import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*Styles */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

/*Components*/
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormIntroComponent } from './components/form-intro/form-intro.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { RequestsComponent } from './components/requests/requests.component';
import { GifInfoComponent } from './components/gif-info/gif-info.component';
import { NewRequestComponent } from './components/new-request/new-request.component';
import { TrackingNumberComponent } from './components/tracking-number/tracking-number.component';
import { FrequentQuestionsAllComponent } from './components/frequent-questions-all/frequent-questions-all.component';
import { HeaderNewRequestComponent } from './components/header-new-request/header-new-request.component';
import { FollowUpRequestsComponent } from './components/follow-up-requests/follow-up-requests.component';
import { FrequentQuestionsComponent } from './components/frequent-questions/frequent-questions.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormIntroComponent,
    ChatbotComponent,
    RequestsComponent,
    GifInfoComponent,
    NewRequestComponent,
    TrackingNumberComponent,
    HomeComponent,
    FrequentQuestionsAllComponent,
    HeaderNewRequestComponent,
    FollowUpRequestsComponent,
    FrequentQuestionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
