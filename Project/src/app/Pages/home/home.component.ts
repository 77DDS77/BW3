import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Classes/post';
import { PostService } from 'src/app/Services/post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts:Post[] = []
  newPostPage: boolean = false

  constructor(private postSvc: PostService, private router: Router) {
    this.router.events.subscribe((event) => {
      this.getPosts();
    })
  }

  ngOnInit(): void {

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

  toggleNewPost() {
    if(
      this.newPostPage == false
    ){
      this.router.navigate([ '/home', 'new-post'])
      this.newPostPage = true

    }else{

      this.router.navigate([ '/home'])
      this.newPostPage = false
    }
  }
}





