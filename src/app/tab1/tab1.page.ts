import { Component, OnInit } from '@angular/core';
import { AppDeliveryService } from '../services/app-delivery.service';
import { app } from 'firebase';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  host : {
    class : "btns-item"
    }
  
})

export class Tab1Page implements OnInit{

  public name : string ; 
  public foto : string ;

  slideOptions = {
    initialSlide: 1,
    speed: 1200,
  };

  slideOptionsCombo = {
    initialSlide: 1,
    speed: 2000,
  };
  constructor(
    private router : Router,
     private webservice : AppDeliveryService,
     private nav : Router,
     private menu: MenuController) {

  }
  ngOnInit() {
    var user = app().auth().currentUser
      if (user != null) {
      this.name = user.displayName;
      this.foto = user.photoURL;
      }else{
        this.router.navigateByUrl('', { skipLocationChange: false }).then(() => {
        this.router.navigate(['']);
      }); 
    }
  }
     

  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }


  bebidasPage(){
    this.nav.navigate(["bebidas"])
  }

  
  pizzaPage(){
    this.nav.navigate(["pizza-list"])
  }


  
  hamburguePage(){
    this.nav.navigate(["hamburguer-list"])
  }


  
  fastfoodPage(){
    this.nav.navigate(["fast-food-list"])
  }

  
  churrascoPage(){
    this.nav.navigate(["churrasco-list"])
  }

  ederecoPage(){
    this.router.navigate(["endereco-menu"])
  }

  carrinhoPage(){
    this.router.navigate(["carrinho"])

  }
  openCustom() {
    this.menu.enable(true, 'menu-global');
    this.menu.open('menu-global');
  }

  

}
