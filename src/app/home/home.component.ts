import { Component, Input } from '@angular/core';

@Component({
  inputs:["ninja"],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hometitle = 'Welcome to the home page...'
  @Input() ninja:any
 
  alertMe(){
    alert("Hey there!");
  }

}
