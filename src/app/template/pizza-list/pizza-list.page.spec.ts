import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaListPage } from './pizza-list.page';

describe('PizzaListPage', () => {
  let component: PizzaListPage;
  let fixture: ComponentFixture<PizzaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
