import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CumpomPagePage } from './cumpom-page.page';

describe('CumpomPagePage', () => {
  let component: CumpomPagePage;
  let fixture: ComponentFixture<CumpomPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumpomPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CumpomPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
