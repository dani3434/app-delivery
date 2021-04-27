import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'endereco-menu',
    loadChildren: () => import('./template/endereco-menu/endereco-menu.module').then( m => m.EnderecoMenuPageModule)
  },
  {
    path: 'ajuda-menu',
    loadChildren: () => import('./template/ajuda-menu/ajuda-menu.module').then( m => m.AjudaMenuPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./template/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'favorito-menu',
    loadChildren: () => import('./template/favorito-menu/favorito-menu.module').then( m => m.FavoritoMenuPageModule)
  },
  {
    path: 'acompanhamento-pedido',
    loadChildren: () => import('./template/acompanhamento-pedido/acompanhamento-pedido.module').then( m => m.AcompanhamentoPedidoPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./template/bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'pizza-list',
    loadChildren: () => import('./template/pizza-list/pizza-list.module').then( m => m.PizzaListPageModule)
  },
  {
    path: 'hamburguer-list',
    loadChildren: () => import('./template/hamburguer-list/hamburguer-list.module').then( m => m.HamburguerListPageModule)
  },
  {
    path: 'fast-food-list',
    loadChildren: () => import('./template/fast-food-list/fast-food-list.module').then( m => m.FastFoodListPageModule)
  },
  {
    path: 'churrasco-list',
    loadChildren: () => import('./template/churrasco-list/churrasco-list.module').then( m => m.ChurrascoListPageModule)
  },
  {
    path: 'perfil-page',
    loadChildren: () => import('./template/perfil-page/perfil-page.module').then( m => m.PerfilPagePageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./template/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'historico-pedidos',
    loadChildren: () => import('./template/historico-pedidos/historico-pedidos.module').then( m => m.HistoricoPedidosPageModule)
  },
  {
    path: 'adicionar-formade-pagamento',
    loadChildren: () => import('./template/adicionar-formade-pagamento/adicionar-formade-pagamento.module').then( m => m.AdicionarFormadePagamentoPageModule)
  },
  {
    path: 'cumpom-page',
    loadChildren: () => import('./template/cumpom-page/cumpom-page.module').then( m => m.CumpomPagePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
