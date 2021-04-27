import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDeliveryService } from 'src/app/services/app-delivery.service';
import { app } from 'firebase';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.page.html',
  styleUrls: ['./perfil-page.page.scss'],
})
export class PerfilPagePage implements OnInit {

  name : string;
  foto : string;
  constructor(
    private router : Router,
    private webservice : AppDeliveryService) { }

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
