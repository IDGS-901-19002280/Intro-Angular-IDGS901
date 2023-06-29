import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperasbasComponent } from './operasbas.component';

describe('OperasbasComponent', () => {
  let component: OperasbasComponent;
  let fixture: ComponentFixture<OperasbasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperasbasComponent]
    });
    fixture = TestBed.createComponent(OperasbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
