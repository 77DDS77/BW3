import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Classes/post';
import { User } from 'src/app/Classes/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() posts!:Post[]
  users:User[] = [];

  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }



  getUsers(): void {
    this.userSvc.getAllUsers().subscribe(
      {
        next: res => {
          this.users = res;
        },
        error: error => console.log(error)
      }
    )
  }

}
