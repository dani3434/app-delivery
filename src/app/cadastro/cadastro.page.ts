import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDeliveryService } from '../services/app-delivery.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

    private nome : string = ""
    private email : string = ""
    private senha : string = ""


  constructor(private router : Router,
    private webservice : AppDeliveryService,
    public toast : ToastController) { }

  ngOnInit() {
  }



  public   cadastroUsuario() {
      this.webservice.cadastroUsuario({
        nome : this.nome,
        email : this.email,
        senha : this.senha
      })
      .then( sucesso =>{
        this.MensagemView("Bem vindo(a) "+ this.nome)
        this.router.navigate(["home"])

      })
      .catch(error =>{
        this.MensagemView(this.webservice.errorFirebase(error.code))
        return;
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
