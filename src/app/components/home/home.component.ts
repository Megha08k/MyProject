import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  @ViewChild(SidenavComponent) SidenavComponent! : SidenavComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onToggel(){
    this.SidenavComponent.onToggle();
  }
}
