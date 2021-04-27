import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdicionarFormadePagamentoPage } from './adicionar-formade-pagamento.page';

describe('AdicionarFormadePagamentoPage', () => {
  let component: AdicionarFormadePagamentoPage;
  let fixture: ComponentFixture<AdicionarFormadePagamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarFormadePagamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionarFormadePagamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
