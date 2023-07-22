import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonMaterialModule } from 'src/app/generics/common-material/common-material.module';

const routes: Routes = [
  {path:'',component:SignInComponent},

];

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
