import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BebidasPage } from './bebidas.page';

describe('BebidasPage', () => {
  let component: BebidasPage;
  let fixture: ComponentFixture<BebidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BebidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
