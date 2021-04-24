import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HamburguerListPage } from './hamburguer-list.page';

describe('HamburguerListPage', () => {
  let component: HamburguerListPage;
  let fixture: ComponentFixture<HamburguerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburguerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HamburguerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
