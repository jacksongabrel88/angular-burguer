import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgeresComponent } from './hamburgeres.component';

describe('HamburgeresComponent', () => {
  let component: HamburgeresComponent;
  let fixture: ComponentFixture<HamburgeresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgeresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
