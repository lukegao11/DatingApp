import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registerMode = false;
  users:any;

  constructor(private http: HttpClient){}

  ngOnInit():void{
    this.getUser();
  }
  registerToggle(){
    this.registerMode = !this.registerMode;
  }
  
  getUser(){
    this.http.get('https://localhost:5001/api/users').subscribe(
      {
        next: response => this.users = response,
        error: err => console.log(err),
        complete: () => console.log("request has completed")
      }
    )
  }
  cancelRegisterMode(event:boolean){
    this.registerMode = event;
  }

}
