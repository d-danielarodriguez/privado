import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioDireccionComponent } from './cambio-direccion.component';

describe('CambioDireccionComponent', () => {
  let component: CambioDireccionComponent;
  let fixture: ComponentFixture<CambioDireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioDireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
