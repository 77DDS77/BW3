import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/Classes/post';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postform!: FormGroup
  submitBtn!:HTMLButtonElement
  formIsValid!: boolean


  constructor(
    private postSvc: PostService,
    private auth: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.postform = new FormGroup({
      postTitle: new FormControl(null, [Validators.required, Validators.minLength(1)]),
      postContent: new FormControl(null, Validators.required),
      postOwner: new FormControl(this.auth.getLoggedUser().id),
      date: new FormControl(null, Validators.required),
    })

  }

  submit(){
    if(this.postform.valid){

      this.postSvc.addPost(
        new Post(
          this.postform.value.postTitle,
          this.postform.value.postContent,
          this.postform.value.postOwner,


          ))
      .subscribe(res => {
        this.router.navigate(['/profile', this.auth.getLoggedUser().slug]);
      })

    }else{
      this.formIsValid = false;

    }
  }




}
