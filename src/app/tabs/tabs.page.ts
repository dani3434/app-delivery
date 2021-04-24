import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AppDeliveryService } from '../services/app-delivery.service';
import { app } from 'firebase';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {


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
  

  OpenCustom() {
    this.menu.enable(true, 'menu-global');
    this.menu.close('menu-global');
  }

  closeCustom() {
    this.menu.enable(true, 'menu-global');
    this.menu.close('menu-global');
  }

}
