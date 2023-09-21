import { Component, OnInit } from '@angular/core';
import { BaseApiService } from '../../services/baseapi.service';
import { User } from '../../entities/users.entity';
import { AxiosPromise } from 'axios';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {
  user : User[] = []
  constructor(private api: BaseApiService){
    
  }
  async getUser()  {
    this.user = await this.api.get<User[]>("api/Users");
    console.log(this.user)
  }
  ngOnInit() {
    this.getUser();
  }
}
