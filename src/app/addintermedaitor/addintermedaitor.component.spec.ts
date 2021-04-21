import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddintermedaitorComponent } from './addintermedaitor.component';

describe('AddintermedaitorComponent', () => {
  let component: AddintermedaitorComponent;
  let fixture: ComponentFixture<AddintermedaitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddintermedaitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddintermedaitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
