import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioPersonaComponent } from './cambio-persona.component';

describe('CambioPersonaComponent', () => {
  let component: CambioPersonaComponent;
  let fixture: ComponentFixture<CambioPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
