import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Classes/post';
import { User } from 'src/app/Classes/user';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:User = this.auth.getLoggedUser();
  posts:Post[] = [];

  constructor(
    private auth:AuthService,
    private postSvc:PostService
  ) { }

  ngOnInit(): void {
    this.postSvc.getPostByOwner(this.user.id)
    .subscribe(posts => {
      this.posts = posts.reverse();
    })
  }

}
