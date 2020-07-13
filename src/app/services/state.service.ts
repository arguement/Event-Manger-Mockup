import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  events =  [
    {
      "category": "Dining",
      "cost": 5000.0,
      "description": "Assasins' breakfast retreat",
      "flyer": "event-calendar-icon.png",
      "id": 1,
      "start_date": "Thu, 20 Feb 2020 08:00:00 GMT",
      "title": "Continental Breakfast",
      "user_id": 1,
      "visibility": false
    },
    {
      "category": "Party",
      "cost": 46000.0,
      "description": "In celebration of the Triwizard Tournament",
      "flyer": "event-calendar-icon.png",
      "id": 2,
      "start_date": "Sun, 15 Mar 2020 19:00:00 GMT",
      "title": "Yule Ball",
      "user_id": 2,
      "visibility": false
    },
    {
      "category": "Conference",
      "cost": 46000.0,
      "description": "Sprint 8 Server Side Essentials Demo",
      "flyer": "event-calendar-icon.png",
      "id": 3,
      "start_date": "Thu, 11 Jun 2020 14:00:00 GMT",
      "title": "NCB Presentation",
      "user_id": 3,
      "visibility": true
    },
    {
      "category": "Conference",
      "cost": 900000.0,
      "description": "Learn how to keep your dog alive",
      "flyer": "event-calendar-icon.png",
      "id": 4,
      "start_date": "Thu, 11 Jun 2020 08:00:00 GMT",
      "title": "Dog Tamer's Conference",
      "user_id": 1,
      "visibility": true
    }
  ]

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

  getEvents():Array<Object>{

    return this.events
  }

  getUsers():Array<Object>{

    return this.users
  }

  constructor() { }
}
