import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoMesComponent } from './consumo-mes.component';

describe('ConsumoMesComponent', () => {
  let component: ConsumoMesComponent;
  let fixture: ComponentFixture<ConsumoMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumoMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
