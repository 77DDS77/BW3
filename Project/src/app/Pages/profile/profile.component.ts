import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Classes/post';
import { User } from 'src/app/Classes/user';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!:User;
  posts:Post[] = [];

  constructor(
    private userSvc: UserService,
    private auth:AuthService,
    private postSvc:PostService
  ) { }

  ngOnInit(): void {
    this.userSvc.getUserById(this.auth.getLoggedUser().id)
    .subscribe(user =>{
      if(user){
        this.user = user
        this.postSvc.getPostByOwner(user.id)
        .subscribe(posts => {
          this.posts = posts
        })
      }
      });
  }

}
