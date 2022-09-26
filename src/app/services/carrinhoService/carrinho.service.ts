import { isDefined } from '@angular/compiler/src/util';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService implements OnInit {

  carrinho: ItemCart[] = []

  constructor() { 
    let getCart: ItemCart[] = JSON.parse(localStorage.getItem('cart'));

    if(isDefined(getCart)) {this.carrinho = [].concat(getCart);  }
    
  }



  ngOnInit(){
    console.log(this.carrinho)
  }

  getCarrinho(): ItemCart[]{
    let car: ItemCart[] = JSON.parse(localStorage.getItem('cart')); 

    if(car[0].nome){
      return car;

    }else{
      return []

    }
  }

  setCarrinho(item : ItemCart){
     this.carrinho.push(item);
     localStorage.setItem('cart', JSON.stringify(this.carrinho))
     console.log(localStorage.getItem('cart'))
  }

  removeCart(id : string){
    let UpdateCart: ItemCart[] = [];

    this.carrinho.map(item=>{
      if(item.id === id){
        return;
      }else{
        UpdateCart.push(item);
      }
    });

    this.updateCartList(UpdateCart)
  }


  updateCartList(list : ItemCart[]){
    localStorage.setItem('cart', JSON.stringify(list))
  }

}
