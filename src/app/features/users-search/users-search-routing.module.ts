import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersSearchContainerComponent } from './users-search-container.component';

const routes: Routes = [
  {
    path: '',
    component: UsersSearchContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersSearchRoutingModule { }
