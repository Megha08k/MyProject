import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted!: boolean;

  dummyUsername:string = "megha@123";
  dummypassword:string="megha@123"

  type:string='password';
  
  constructor(private router:Router) {  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    })
  }


  onSubmit() {
    console.log(this.loginForm)
    if(this.loginForm.valid){
     if(this.dummyUsername === this.loginForm.value.username && this.dummypassword === this.loginForm.value.password){
        this.router.navigate(['/home']);
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
