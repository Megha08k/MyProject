import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild("drawer") drawer! : any;
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.drawer.toggle()
  }

}