import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PolishDatePipe } from './pipes/polish-date.pipe';
import { SearchGalleriesPipe } from './pipes/search-galleries.pipe';
import { NavComponent } from './components/nav/nav.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleriesSearchComponent } from './components/galleries-search/galleries-search.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GalleryDetailsComponent } from './components/gallery-details/gallery-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentsFormComponent } from './components/comments-form/comments-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DateDirective } from './date.directive';
import { NewsComponent } from './components/news/news.component';
import { NewslistComponent } from './components/newslist/newslist.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';

import { SortNewsPipe } from './pipes/sort-news.pipe';
import { SortnewsComponent } from './components/sortnews/sortnews.component';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { NewscommentformComponent } from './components/newscommentform/newscommentform.component';
import { NewscommentviewComponent } from './components/newscommentview/newscommentview.component';
import { AddEditGalleryComponent } from './components/add-edit-gallery/add-edit-gallery.component';
import { AddEditNewsComponent } from './components/add-edit-news/add-edit-news.component';


@NgModule({
  declarations: [
    AppComponent,
    PolishDatePipe,
    SearchGalleriesPipe,
    NavComponent,
    GalleriesComponent,
    GalleryComponent,
    GalleriesSearchComponent,
    DashboardComponent,
    GalleryDetailsComponent,
    ContactComponent,
    CommentsListComponent,
    CommentsFormComponent,

    DateDirective,
    NewsComponent,
    NewslistComponent,
    NewsDetailsComponent,

    SortNewsPipe,
    SortnewsComponent,


    NewscommentformComponent,
    NewscommentviewComponent,
    AddEditGalleryComponent,
    AddEditNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
