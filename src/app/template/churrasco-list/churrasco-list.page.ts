import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-churrasco-list',
  templateUrl: './churrasco-list.page.html',
  styleUrls: ['./churrasco-list.page.scss'],
})
export class ChurrascoListPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
  carrinhoPage(){
    this.router.navigate(["carrinho"])

  }
}
