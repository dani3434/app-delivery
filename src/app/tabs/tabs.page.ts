import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
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
    private toast : ToastController,
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



  
  pizzaPage(){
    this.router.navigate(["perfil-page"])
  }
  
  notificationPage(){
    this.router.navigate(["notification"])
  }

  
  ederecoPage(){
    this.router.navigate(["endereco-menu"])
  }

  
  ajuda(){
    this.router.navigate(["ajuda-menu"])
  }

  
  addFormadePagamento(){
    this.router.navigate(["adicionar-formade-pagamento"])
  }

  sair(){
    // logout
    this.webservice.logout().then(ok=> 
      this.router.navigate([""]))
      this.presentToast("você estar desconectado", "middle")

      .catch(err=>{
        this.presentToast("Ops! Erro ao tentar deslogar sua conota", "middle")
      })
  }


  OpenCustom() {
    this.menu.enable(true, 'menu-global');
    this.menu.close('menu-global');
  }

  closeCustom() {
    this.menu.enable(true, 'menu-global');
    this.menu.close('menu-global');
  }

  async presentToast(message: string, position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toast.create({
      message: message,
      duration: 1800,
      position: position
    });

    await toast.present();
  }
}
