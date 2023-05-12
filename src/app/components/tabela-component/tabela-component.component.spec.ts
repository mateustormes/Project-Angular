import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaComponentComponent } from './tabela-component.component';

describe('TabelaComponentComponent', () => {
  let component: TabelaComponentComponent;
  let fixture: ComponentFixture<TabelaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaComponentComponent]
    });
    fixture = TestBed.createComponent(TabelaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
