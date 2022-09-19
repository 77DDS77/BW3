import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    HomeComponent,
    NewPostComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
