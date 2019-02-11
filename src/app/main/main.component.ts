import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private data: DataService) { }

  public users: User[] = [];

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data;
        console.log(data);
      }
    );
  }

  removeItem(user:User) {
    const i = this.users.indexOf(user);
    this.users.splice(i, 1);
    console.log(user);
  }
}