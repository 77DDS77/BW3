import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Classes/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!:FormGroup
  isFormValid!:boolean;

  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        username: new FormControl(null, Validators.required),
        avatar: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      }
    )
  }

  submit(){
    console.log(this.form.valid);

    if(this.form.valid){
      this.authSrv.register(new User(
        this.form.value.name,
        this.form.value.lastname,
        this.form.value.username,
        this.form.value.avatar,
        this.form.value.email,
        this.form.value.password
      ))
      .subscribe(res => {
        console.log(res);
        this.authSrv.saveAccessData(res)
        this.router.navigate(['/'])
      })
    }else{
      console.log('errore form non valido');
      this.isFormValid = false;

    }
  }

}
