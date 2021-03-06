import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListPage } from './news-list.page';
import {NewsDetailPage} from './news-detail/news-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NewsListPage
  },
 /*{
    path: 'news-detail',
    loadChildren: () => import('./news-detail/news-detail.module').then( m => m.NewsDetailPageModule)
  },*/
  {
    path: '/:articleUrl',
    loadChildren: () => import('./news-detail/news-detail.module').then( m => m.NewsDetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsListPageRoutingModule {}
