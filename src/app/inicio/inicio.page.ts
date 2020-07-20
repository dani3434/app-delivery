import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AppDeliveryService } from '../services/app-delivery.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
   

  constructor(
    private router : Router, 
     private webservice : AppDeliveryService,
     public toast : ToastController) { }

  ngOnInit() {
    this.webservice.checkLogged().onAuthStateChanged(user => {
      if (user) {

      this.MensagemView("Bem vindo(a) de volta "+user.displayName, "bottom", 1000)
      this.router.navigate(["home"])
      
      } else {
        // usuario não estar Logado  :(
      }
    });
  
  }


  async MensagemView(mensager : string, position? :string, tempo?: number) : Promise<void> {
  
    const toast = await this.toast.create({
      message: mensager,
      duration: tempo?  tempo : 5000,
      position : position =='top' || position =='bottom' || position =='middle'? position : "top"
    });
    toast.present();
  }


}
