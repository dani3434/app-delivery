import { Component, OnInit } from '@angular/core';
import { app } from 'firebase';
import { Router } from '@angular/router';
import { AppDeliveryService } from '../services/app-delivery.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  
  public name : string ; 
  public foto : string ;

  constructor(private router : Router, private webservice : AppDeliveryService) {}



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
  


}
