import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListPage } from './news-list.page';

const routes: Routes = [
  {
    path: '',
    component: NewsListPage
  },
  {
    path: 'news-item',
    loadChildren: () => import('./news-item/news-item.module').then( m => m.NewsItemPageModule)
  },
  {
    path: 'news-detail',
    loadChildren: () => import('./news-detail/news-detail.module').then( m => m.NewsDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsListPageRoutingModule {}
