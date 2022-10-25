import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepropComponent } from './updateprop.component';

describe('UpdatepropComponent', () => {
  let component: UpdatepropComponent;
  let fixture: ComponentFixture<UpdatepropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
