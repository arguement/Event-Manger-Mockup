import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {

    event = {
    title: "",
    category: "",
    venue: "",
    cost: 0,
    description: "",
    startDate: new Date(),
    endDate: new Date(),
    file: ""

  }
 

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createEvent(){

    console.log(this.event)
    let form  =new FormData();
    form.append("title",this.event.title)
    form.append("description",this.event.description)
    form.append("cost",""+this.event.cost)
    form.append("category",""+this.event.category)
    form.append("start_date",this.modifyTime(this.event.startDate))
    form.append("end_date",this.modifyTime(this.event.startDate))
    form.append("flyer",this.event.file)
    

    
  }

  modifyTime(date:any):string{
    date = new Date(date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const time = date.toTimeString().split(" ")[0]

    return `${year}-${month}-${day} ${time}`
  }

  loadImageFromDevice(event: { target: { files: any[]; }; }) {
    console.log("here")
    const file = event.target.files[0];
    console.log(file)
    this.event.file = file;
  
  };

}
