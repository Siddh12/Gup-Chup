import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserPageComponent } from './all-user-page.component';

describe('AllUserPageComponent', () => {
  let component: AllUserPageComponent;
  let fixture: ComponentFixture<AllUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUserPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
