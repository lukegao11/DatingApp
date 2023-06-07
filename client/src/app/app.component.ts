import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { JsonPipe } from '@angular/common';
import { User } from './_model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dating App';
  //users:any;
  constructor(/*private http:HttpClient, */private accountSerivce: AccountService){}
  
  ngOnInit(): void {
    //this.getUser();
    this.setCurrentUser();
  }

  // getUser(){
  //   this.http.get('https://localhost:5001/api/users').subscribe(
  //     {
  //       next: response => this.users = response,
  //       error: err => console.log(err),
  //       complete: () => console.log("request has completed")
  //     }
  //   )
  // }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountSerivce.setCurrentUser(user);
  }



  
}
