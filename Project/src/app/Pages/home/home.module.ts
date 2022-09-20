import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewPostComponent } from './new-post/new-post.component';

import { PostComponent } from './post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from 'src/app/Main/nav/nav.component';
import { CommentsComponent } from './comments/comments.component';



@NgModule({
  declarations: [
    HomeComponent,
    NewPostComponent,
    PostComponent,
    NavComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,

  ]
})
export class HomeModule { }
