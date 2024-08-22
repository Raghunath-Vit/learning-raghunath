import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface BackendResponse{
  fact:string;
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  data:any;
  catFact:string="";
  constructor(private http:HttpClient){
    this.data="";
    this.getData();
  }
  getData(){
    this.http.get<BackendResponse>("https://catfact.ninja/fact").subscribe(
      (response)=>{
        this.data=response;
        this.catFact=response.fact;
        console.log(response.fact);
      },
      (error)=>{
        console.error("Error fetching data:", error);
      },
    );
  }
}
