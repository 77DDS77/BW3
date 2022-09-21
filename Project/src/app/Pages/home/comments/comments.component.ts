import { Component, Input, OnInit } from '@angular/core';
import { PostComment } from 'src/app/Classes/comment';
import { AuthService } from 'src/app/Services/auth.service';
import { CommentService } from 'src/app/Services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() postId!:number
  comments: PostComment[] = []

  constructor(private commentSvc:CommentService, private authSvc:AuthService) { }

  ngOnInit(): void {
    this.commentSvc.getCommentByPost(this.postId).subscribe(
      res => {this.comments = res
      console.log(this.comments)
      

  })
  }

  getPostComments() {
    this.commentSvc.getCommentByPost(this.postId).subscribe(
      res => console.log(res)
    )
  }
  isEditing:boolean = false
  editComment(comment: PostComment): boolean {
    if(this.authSvc.getLoggedUser().id == comment.ownerId) {
      this.isEditing = !this.isEditing
      return true
    } else {
      return false
    }
  }

}
