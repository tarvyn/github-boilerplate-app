import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersSearchContainerComponent } from './users-search-container.component';
import { UsersSearchRoutingModule } from './users-search-routing.module';

@NgModule({
  declarations: [UsersSearchContainerComponent],
  imports: [
    CommonModule,
    UsersSearchRoutingModule
  ]
})
export class UsersSearchModule {}
