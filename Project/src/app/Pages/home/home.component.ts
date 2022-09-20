import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Classes/post';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts:Post[] = []

  public isCollapsed = false;

  constructor(private postSvc: PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }


  getPosts() {
    this.postSvc.getAllPosts().subscribe(
      {
        next: res => {
          this.posts = res;
        },
        error: error => console.log(error)
      }
    )
  }
}





