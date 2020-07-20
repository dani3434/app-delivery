import { Component, OnInit } from '@angular/core';
import { AppDeliveryService } from '../services/app-delivery.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {



  constructor( private webservice : AppDeliveryService) {



  }




}
