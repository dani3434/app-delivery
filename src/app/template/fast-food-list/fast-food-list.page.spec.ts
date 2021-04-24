import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FastFoodListPage } from './fast-food-list.page';

describe('FastFoodListPage', () => {
  let component: FastFoodListPage;
  let fixture: ComponentFixture<FastFoodListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastFoodListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FastFoodListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
