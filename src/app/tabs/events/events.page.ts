import { Component, OnInit } from '@angular/core';
import { StateService } from "../../services/state.service";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  longPress = 'first state';
  longPressing = 0;
  isLongPressed = false;

  /**handles all events */
  events =  this.state.getEvents();

  /**toggle search */
  searchActive = false;

  constructor(public state: StateService,public actionSheetController:ActionSheetController) { }

  ngOnInit() {
  }

  dateConvert(date: string){
    return new Date(date).toLocaleString()
  }

  eventDetails(index:number){

    console.log(index);

  }


  /**opens action sheet with option to delete */
  public async showActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: "Photos",
      buttons: [{
        text: "Delete",
        role: "destructive",
        icon: "trash",
        handler: ()=>{
          
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }]
    });
    await actionSheet.present();
  }

}
