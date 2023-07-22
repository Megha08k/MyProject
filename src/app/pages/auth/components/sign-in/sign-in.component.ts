import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;

  dummyUsername:string = "megha@123";
  dummypassword:string="megha@123"

  type:string='password';
  
  constructor(private router:Router) {  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('megha@123', [Validators.required]),
      password: new FormControl('megha@123',[Validators.required, Validators.minLength(8)]),
    })
  }


  onSubmit() {
    console.log(this.loginForm)
    if(this.loginForm.valid){
     if(this.dummyUsername === this.loginForm.value.username && this.dummypassword === this.loginForm.value.password){
        this.router.navigate(['/auth/home']);
      }
    }
  }

  // PasswordStrengthValidator(control: FormControl)
  // {
  //     let password=control.value;
  //     let upperCaseCharacters = /[A-Z]+/g;
  //     let lowerCaseCharacters = /[a-z]+/g;
  //     let numberCharacters = /[0-9]+/g;
  //     let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  //     if(upperCaseCharacters.test(password)===false && lowerCaseCharacters.test(password)===false && numberCharacters.test(password)===false && specialCharacters.test(password)===false)
  //     {
  //       return 'Password must contain following: numbers, lowercase letters, uppercase letters, or special characters.'
  //     }else{
  //       return null
  //     }
  // }

  onClickIcon(){
    // if(this.type === 'text')
    // {
    //   this.icon="fa-eye-slash";
    //   this.type=
    // }else{
    //   this.icon="fa-eye"
    //   this.type="text"
    // }

    this.type = (this.type === 'text') ?  'password' : 'text';
    
    // this.type === '!password'?  this.type="text" :  this.icon="fa-eye";
    

  }
}

