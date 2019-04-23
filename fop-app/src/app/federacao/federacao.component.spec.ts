import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederacaoComponent } from './federacao.component';

describe('FederacaoComponent', () => {
  let component: FederacaoComponent;
  let fixture: ComponentFixture<FederacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
