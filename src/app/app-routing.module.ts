import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GalleriesComponent} from './components/galleries/galleries.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ContactComponent} from './components/contact/contact.component';
import {GalleryDetailsComponent} from './components/gallery-details/gallery-details.component';
import {NewsComponent} from './components/news/news.component';
import {NewsDetailsComponent} from './components/news-details/news-details.component';


const Routes: Routes = [{
  path: 'news',
  component: NewsComponent
},
  {
    path: 'galleries',
    component: GalleriesComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent

  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'galleries/:galleryId',
    component: GalleryDetailsComponent,
  }, {
    path: 'news/:newsId',
    component: NewsDetailsComponent,
  }, {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
