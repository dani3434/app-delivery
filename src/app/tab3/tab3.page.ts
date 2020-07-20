import { Component, OnInit } from '@angular/core';
import { app } from 'firebase';
import { AppDeliveryService } from '../services/app-delivery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

    
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
