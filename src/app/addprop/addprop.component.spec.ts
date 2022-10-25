import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpropComponent } from './addprop.component';

describe('AddpropComponent', () => {
  let component: AddpropComponent;
  let fixture: ComponentFixture<AddpropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
