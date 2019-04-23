import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestfopComponent } from './gestfop.component';

describe('GestfopComponent', () => {
  let component: GestfopComponent;
  let fixture: ComponentFixture<GestfopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestfopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestfopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
