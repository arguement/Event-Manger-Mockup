import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users =  [
    {
      "admin": true,
      "email": "jwick@thecontinental.com",
      "firstname": "John",
      "id": 1,
      "lastname": "Wick"
    },
    {
      "admin": false,
      "email": "h.potter@hogwarts.com",
      "firstname": "Harry",
      "id": 2,
      "lastname": "Potter"
    },
    {
      "admin": false,
      "email": "nc_hammer@gmail.com",
      "firstname": "Nathaniel",
      "id": 3,
      "lastname": "Christie"
    },
    {
      "admin": false,
      "email": "keffs@gmail.com",
      "firstname": "Kayla",
      "id": 4,
      "lastname": "Effs"
    }
  ]

  /**toggle search */
  searchActive = false;
  constructor() { }

  ngOnInit() {
  }

}
