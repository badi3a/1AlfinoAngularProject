import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {FavoritClassroomComponent} from './favorit-classroom/favorit-classroom.component';
import {ClassroomComponent} from './classroom/classroom.component';
import {AddClassroomComponent} from './add-classroom/add-classroom.component';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FavoritClassroomComponent,
    ClassroomComponent,
    AddClassroomComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
