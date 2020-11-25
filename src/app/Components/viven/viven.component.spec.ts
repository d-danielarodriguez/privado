import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VivenComponent } from './viven.component';

describe('VivenComponent', () => {
  let component: VivenComponent;
  let fixture: ComponentFixture<VivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
