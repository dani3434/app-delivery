import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburguer-list',
  templateUrl: './hamburguer-list.page.html',
  styleUrls: ['./hamburguer-list.page.scss'],
})
export class HamburguerListPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  carrinhoPage(){
    this.router.navigate(["carrinho"])

  }

}
