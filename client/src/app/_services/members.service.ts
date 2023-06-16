import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Member } from '../_model/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  
  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + '/users');
  }
  
  getMember(username: string){
    return this.http.get<Member>(this.baseUrl + '/users/' + username);
  }

  // no longer needed as we have created interceptor for authorization (section9)
  // //set http option for token
  // getHttpOptions(){
  //   const userString = localStorage.getItem('user');
  //   if(!userString) return;
  //   const user = JSON.parse(userString);
  //   return{
  //     headers: new HttpHeaders({
  //       Authorization: 'Bearer ' + user.token
  //     })
  //   }
  // }


}
