import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentaComponent } from './alimenta.component';

describe('AlimentaComponent', () => {
  let component: AlimentaComponent;
  let fixture: ComponentFixture<AlimentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
