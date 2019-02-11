import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('https://app.dev.fooddocs.ee/api/testtask');
  }
}