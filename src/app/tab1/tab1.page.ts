import { Component, OnInit } from '@angular/core';
import { AppDeliveryService } from '../services/app-delivery.service';
import { app } from 'firebase';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  host : {
    class : "btns-item"
    }
  
})

export class Tab1Page implements OnInit{

  public name : string ; 
  public foto : string ;

  constructor(
    private router : Router,
     private webservice : AppDeliveryService,
     private menu: MenuController) {

  }
  ngOnInit() {

    var user = app().auth().currentUser
      
      if (user != null) {
      this.name = user.displayName;
      this.foto = user.photoURL;
  
      }else{

        this.router.navigateByUrl('', { skipLocationChange: false }).then(() => {
          location.reload();
          this.router.navigate(['home']);
          
      }); 
     
    }

  }
     
    

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  


  

}
