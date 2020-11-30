import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentaColoniasComponent } from './alimenta-colonias.component';

describe('AlimentaColoniasComponent', () => {
  let component: AlimentaColoniasComponent;
  let fixture: ComponentFixture<AlimentaColoniasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentaColoniasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentaColoniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
