import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostComment } from 'src/app/Classes/comment';
import { Post } from 'src/app/Classes/post';
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
  form!: FormGroup;
  formIsValid!: boolean

  constructor(private commentSvc:CommentService, private authSvc:AuthService) { }

  ngOnInit(): void {
    this.commentSvc.getCommentByPost(this.postId).subscribe(
      res => {
        this.comments = res     
    })
    this.form = new FormGroup({
      content: new FormControl(null, Validators.required)
    })
  }


  getPostComments() {
    this.commentSvc.getCommentByPost(this.postId).subscribe(
      res => console.log(res)
    )
  }
  
  canEditComment(comment:PostComment):boolean {
    return this.authSvc.getLoggedUser().id == comment.ownerId ? true : false
  }

  changeComment(comment: PostComment): void {
    if(comment.isEditing) {
      console.log("editato")
      comment.isEditing = false
      this.commentSvc.editComment(comment)
      .subscribe(() => {
        console.log("edit completo")
      })

    } else {
      comment.isEditing = !comment.isEditing
    }
  }

  postComment() {
    if(this.form.valid) {
      this.commentSvc.addComment(new PostComment(
        this.postId,
         this.authSvc.getLoggedUser().id,
         this.authSvc.getLoggedUser().username,
         this.form.value.content
      ))
      .subscribe((res) => {
        this.comments.push(res)
        this.form.reset()
      })
    }
  }


}
