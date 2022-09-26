import { Injectable } from '@angular/core';


import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase';




@Injectable({
  providedIn: 'root'
})

export class AppDeliveryService {

   
 private provider =  new auth.FacebookAuthProvider();

 public usuarioInfor : firebase.User;


  constructor(
    private angularFire : AngularFirestore, 
    private authAngular : AngularFireAuth) {
    
    this.authAngular.onAuthStateChanged((user) => {
        if (user) {
            this.usuarioInfor = user
        } else {
                 // usuario não estar Logado  :(
  
        }
      })
     }

  public getauthReference(){
       return this.authAngular.currentUser.then;
     }

  public login(email: string, senha: string){
      return this.authAngular.setPersistence(auth.Auth.Persistence.SESSION)
      .then(()=> {
        return this.authAngular.signInWithEmailAndPassword(email.replace(/\s/g, ''),senha)
      })
    }

  public logout(){
     return this.authAngular.signOut()
    }


  public cadastroUsuario(user : CadastroForm) : Promise<firebase.auth.UserCredential>{

      return this.authAngular.createUserWithEmailAndPassword(user.email.replace(/\s/g,''),user.senha)
  
    }



  public facebookLogin(){
     return  this.authAngular.signInWithPopup(this.provider)
  }

    
async AlterarUsuario(nome: string , photoURL?: string) : Promise<void>{
     (await this.authAngular.currentUser).updateProfile({
      displayName: nome,
      photoURL : "https://firebasestorage.googleapis.com/v0/b/delivery-fed07.appspot.com/o/WhatsApp%20Image%202020-07-18%20at%2019.37.52.jpeg?alt=media&token=1c9ef92e-8107-4081-a1f5-fc7483c5c188"
  })
  
 }


  checkLogged(){
      return  this.authAngular;
    }


  errorFirebase(erro : string) { 
    let request = ""
      switch(erro) {      
        case "auth/user-disabled":
            request = "Usuário bloqueado, contate o administrador"
        break;
        
        case "auth/email-already-in-use":
            request = "E-mail já estar sendo usado por outro usuário"
        break;
        
        case "auth/invalid-email":
             request = "Esse e-mail não é valido!"
        break;
        
        case "auth/weak-password":
            request = "Digite uma senha com no mínimo 6 caracteres!"
        break;
        
        case "auth/wrong-password":
             request = "Senha incorreta!"
        break;

        case "auth/user-not-found":
              request = "Usuário nao encontrado!"
        break;

        case "auth/network-request-failed":
              request = "Falha na conexão com a internet!"
        break;

        case "auth/argument-error": 
             request = "preencha todos os campos!"
        break;
        
        case "auth/web-storage-unsupported":
          request = "É necessário habilitar Cookies Neste Navegador!!!"
        break;
          
        default: request = erro;
      }
  
         return request;
  }


}
