import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersSearchSelectorsService } from './users-search-selectors.service';
import { UserControlComponent } from './components/user-control/user-control.component';
import { UsersSearchContainerComponent } from './users-search-container.component';
import { UsersSearchRoutingModule } from './users-search-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    UsersSearchContainerComponent,
    UserControlComponent,
    SearchBarComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersSearchRoutingModule,
    NgbAccordionModule
  ],
  providers: [
    UsersSearchSelectorsService
  ]
})
export class UsersSearchModule {}
