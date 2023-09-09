import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagePageComponent } from './massage-page.component';

describe('MassagePageComponent', () => {
  let component: MassagePageComponent;
  let fixture: ComponentFixture<MassagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassagePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
