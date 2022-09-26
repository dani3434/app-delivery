import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  constructor(private location: Location) { }


  ngOnInit() {
  }


  backPrevious(){
    this.location.back()
  }
}
