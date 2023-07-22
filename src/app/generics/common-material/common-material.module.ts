import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
const MaterialComponents=[
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule
]

@NgModule({
 
  imports: [CommonModule,MaterialComponents],
  exports:[MaterialComponents]

})
export class CommonMaterialModule { }
