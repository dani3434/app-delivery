import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDeliveryService } from '../services/app-delivery.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  private email : string  ="";
  private senha  : string = "";

  constructor(
    private router : Router,
    private webservice : AppDeliveryService,
    public toast : ToastController) { }

  ngOnInit() {
    
  }

    public login(){

      this.webservice.login(this.email, this.senha)
      .then(date=>{
        this.router.navigate(['home'])

      })
      .catch(error =>{
       let mensagem = this.webservice.errorFirebase(error.code);

       this.MensagemView(mensagem);

      })
    }



  async MensagemView(mensager : string) : Promise<void> {
  
    const toast = await this.toast.create({
      message: mensager,
      duration: 4000,
      position : 'top'
    });
    toast.present();
  }

}
