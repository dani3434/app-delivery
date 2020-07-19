import { Injectable } from '@angular/core';


import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { async } from '@angular/core/testing';
import { promise } from 'protractor';

interface  CadastroForm {
  nome : string,
  email : string,
  senha : string
}




@Injectable({
  providedIn: 'root'
})

export class AppDeliveryService {



  constructor(
    private firebase : AngularFirestore, 
    private auth : AngularFireAuth) { }


  public login(email: string, senha: string){
      return this.auth.signInWithEmailAndPassword(email.replace(/\s/g, ''),senha)
      
    }



  public cadastroUsuario(user : CadastroForm) : Promise<firebase.auth.UserCredential>{

             return this.auth.createUserWithEmailAndPassword(user.email.replace(/\s/g,''),user.senha)

    }



    
   async AlterarUsuario(user : CadastroForm) : Promise<void>{
     (await this.auth.currentUser).updateProfile({
      displayName: user.nome,
      photoURL : "https://firebasestorage.googleapis.com/v0/b/delivery-fed07.appspot.com/o/WhatsApp%20Image%202020-07-18%20at%2019.37.52.jpeg?alt=media&token=1c9ef92e-8107-4081-a1f5-fc7483c5c188"
  })
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
          
        default: request = erro;
      }
  
         return request;
  }


}
