import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoritoMenuPage } from './favorito-menu.page';

describe('FavoritoMenuPage', () => {
  let component: FavoritoMenuPage;
  let fixture: ComponentFixture<FavoritoMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritoMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritoMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
