import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerHamburguerComponent } from './fazer-hamburguer.component';

describe('FazerHamburguerComponent', () => {
  let component: FazerHamburguerComponent;
  let fixture: ComponentFixture<FazerHamburguerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FazerHamburguerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FazerHamburguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
