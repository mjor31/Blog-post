import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategotyNavbarComponent } from './categoty-navbar.component';

describe('CategotyNavbarComponent', () => {
  let component: CategotyNavbarComponent;
  let fixture: ComponentFixture<CategotyNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategotyNavbarComponent]
    });
    fixture = TestBed.createComponent(CategotyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
