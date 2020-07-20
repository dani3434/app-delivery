import { Component, OnInit } from '@angular/core';
import { app } from 'firebase';
import { Router } from '@angular/router';
import { AppDeliveryService } from '../services/app-delivery.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  
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
