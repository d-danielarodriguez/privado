import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasMComponent } from './altas-m.component';

describe('AltasMComponent', () => {
  let component: AltasMComponent;
  let fixture: ComponentFixture<AltasMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltasMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltasMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
