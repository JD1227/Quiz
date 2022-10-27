import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  registerUser(user:any){
    this.api.registerUser(user);
  }

}
