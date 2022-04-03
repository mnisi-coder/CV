import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourosalComponent } from './courosal.component';

describe('CourosalComponent', () => {
  let component: CourosalComponent;
  let fixture: ComponentFixture<CourosalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourosalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
