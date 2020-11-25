import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDireccionComponent } from './vista-direccion.component';

describe('VistaDireccionComponent', () => {
  let component: VistaDireccionComponent;
  let fixture: ComponentFixture<VistaDireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
