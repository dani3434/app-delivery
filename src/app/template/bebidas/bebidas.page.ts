import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinhoService/carrinho.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {

  constructor(
    private router : Router,
    private cartService : CarrinhoService) { }

  ngOnInit() {
  }



  addItem(){

    let item = { 
      id : '1',
      nome : 'Coca cola',
      preco : 50.25,
      descricao : "coca cola 2 litros ",
      tipo: "bebidas",
      quantidade : 1
    
    }
this.cartService.setCarrinho(item)
  }

  
  carrinhoPage(){
    this.router.navigate(["carrinho"])

  }

}
