import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path : '', redirectTo: './', pathMatch: 'full'},
  { path: './' ,
    component: HomeComponent,
    children : [
      { path:'about', component:AboutComponent},
      { path:'contact', component:ContactComponent},
    ]
  },
  { path:'auth', loadChildren:() => import('../app/pages/auth/auth.module').then(m=>m.AuthModule)},
  {path : '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
