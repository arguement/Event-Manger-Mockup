import { Component, } from '@angular/core';
import { Router  } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    usercred = {
      username: "",
      password: ""
    }  
    constructor(private router: Router) { 
        
    }

    navigateToMain(){
      console.log(this.usercred)
      this.router.navigate(["/tabs"])
    }

    navigateToRegister(){
      
      this.router.navigate(["/register"])
    }

    

}
