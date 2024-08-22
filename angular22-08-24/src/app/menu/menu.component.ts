import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menu=[{title:"Home",path:"/home"},{title:"About",path:"/about"},{title:"Contact us",path:"/contact"}]
}
