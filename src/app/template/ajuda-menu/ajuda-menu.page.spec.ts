import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjudaMenuPage } from './ajuda-menu.page';

describe('AjudaMenuPage', () => {
  let component: AjudaMenuPage;
  let fixture: ComponentFixture<AjudaMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjudaMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjudaMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
