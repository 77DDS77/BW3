import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/Classes/post';
import { User } from 'src/app/Classes/user';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() posts!:Post[]
  users:User[] = [];

  constructor(
    private userSvc: UserService,
    private postSvc: PostService,
    private modalService: NgbModal,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getAvatar(users:User[], post:Post):string | undefined {
    if(users && post){
      return users.find(user => user.id == post.ownerId)?.avatar
    }
    return ''
  }


  getUsers(): void {
    this.userSvc.getAllUsers()
    .subscribe(users => {
      this.users = users;
    })
  }

  deleteMyPost(post:Post){

      this.postSvc.deletePost(post)
      .subscribe(() =>{
        let index = this.posts.findIndex(p => p.id === post.id)
        this.posts.splice(index, 1)
      })

  }

  openVerticallyCentered(content:any, post:Post) {
    if(this.auth.getLoggedUser().id == post.ownerId){
      this.modalService.open(content, { centered: true })
    }else{
      alert('You can t delete other users post')
    }
  }


}
