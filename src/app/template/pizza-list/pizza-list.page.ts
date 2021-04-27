import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.page.html',
  styleUrls: ['./pizza-list.page.scss'],
})
export class PizzaListPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  carrinhoPage(){
    this.router.navigate(["carrinho"])

  }

}
