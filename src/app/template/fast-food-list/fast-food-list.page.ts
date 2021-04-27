import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fast-food-list',
  templateUrl: './fast-food-list.page.html',
  styleUrls: ['./fast-food-list.page.scss'],
})
export class FastFoodListPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  
  carrinhoPage(){
    this.router.navigate(["carrinho"])

  }


}
