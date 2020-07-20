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


  // aviso de cookies desabilitado
  public tentativa = 0;


  constructor(
    private router : Router,
    private webservice : AppDeliveryService,
    public toast : ToastController) {



     }

  ngOnInit() {
    this.webservice.checkLogged().onAuthStateChanged(user => {
      if (user) {
        
      this.router.navigate(["home"])
      } else {
              // usuario não estar Logado  :(

      }
    });
   
  }

    public login(){

      if(this.email==="" || this.senha===""){

        this.MensagemView("Preencha todos campos corretamente!")
        return;
      }
      else
      this.webservice.login(this.email, this.senha)
      .then(date=>{
        this.MensagemView("Bem vindo(a) de volta "+date.user.displayName, "bottom")

        this.router.navigate(['home'])

      })
      .catch(error =>{
       let mensagem = this.webservice.errorFirebase(error.code);

       this.MensagemView(mensagem);

      })
    }





    facebookLogin(){
      this.webservice.facebookLogin()
      .then(result => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        let token = (<any>result).credential.accessToken;
        // The signed-in user info.
        let user = result.user;

    this.MensagemView("Bem vindo(a) de volta "+user.displayName)
    this.router.navigate(['home'])


        // ...
      }).catch(error => {
    

        if(this.tentativa> 5) {

          this.MensagemView(`
          Se você estar tentando entrar pelo modo  \n 
          "Anônimo" de seu navegador saiba que isso \n
          não funcioná, \ Pois p mesmo não permite  \n
          Cookies. Por favor retorne ao navegador  \n
          normal ou habilite o Cookies nas configurações
          `,"bottom", 120000)
          this.tentativa = 0;
            return;
        }
        else
        
        this.MensagemView(this.webservice.errorFirebase(error.code))
        this.tentativa += 1 ;
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
