import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChurrascoListPage } from './churrasco-list.page';

describe('ChurrascoListPage', () => {
  let component: ChurrascoListPage;
  let fixture: ComponentFixture<ChurrascoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurrascoListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChurrascoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
