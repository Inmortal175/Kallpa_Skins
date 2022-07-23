import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Admin-Panel/main/main.component';
import { DashBoardComponent } from './Admin-Panel/dash-board/dash-board.component';
import { UserProfileComponent } from './user-profile/main/user-profile.component';
import { HttpClientModule} from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFComponent } from './user-profile/forms/reactive-f/reactive-f.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashBoardComponent,
    UserProfileComponent,
    ReactiveFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
