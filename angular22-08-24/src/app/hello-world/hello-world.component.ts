import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  msg:string;
  students:string[];
  showMsg:boolean;
    constructor(){
    this.msg="Angular is Good!";
    this.students=["Raghunath Singh","Mannu Singh"];
    this.showMsg=true;
  }
  sayHello():void{
    alert("Hello From Angular");
  }
  toggleShowMsg(){
    this.showMsg=!this.showMsg;
  }
}

