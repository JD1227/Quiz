import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  registerUser(user: any){
    this.http.post('http://localhost:3000/register', user).subscribe(res =>{
      console.log(res);
    })
  }
  
}
