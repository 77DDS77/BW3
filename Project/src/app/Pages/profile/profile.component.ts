import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  user:User = new User('', '', '', '', '', '')
  posts:Post[] = [];

  constructor(
    private auth:AuthService,
    private postSvc:PostService,
    private route:ActivatedRoute,
    private userSvc: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {

      this.userSvc.getUserBySlug(params.slug)
      .subscribe(user => {
        this.user = user[0]

        this.postSvc.getPostByOwner(user[0].id)
        .subscribe(posts => {
          this.posts = posts.reverse();
        })
      })
    })


  }

}
