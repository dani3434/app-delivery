import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilPagePage } from './perfil-page.page';

describe('PerfilPagePage', () => {
  let component: PerfilPagePage;
  let fixture: ComponentFixture<PerfilPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
