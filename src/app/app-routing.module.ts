import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users-search',
    pathMatch: 'full'
  },
  {
    path: 'users-search',
    loadChildren: './features/users-search/users-search.module#UsersSearchModule'
  },
  // TODO: implement page not found component
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
