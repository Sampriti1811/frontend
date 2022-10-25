import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustregComponent } from './custreg.component';

describe('CustregComponent', () => {
  let component: CustregComponent;
  let fixture: ComponentFixture<CustregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
