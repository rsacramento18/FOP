import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtjComponent } from './ctj.component';

describe('CtjComponent', () => {
  let component: CtjComponent;
  let fixture: ComponentFixture<CtjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
