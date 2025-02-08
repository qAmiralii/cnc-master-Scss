import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFixComponent } from './support-fix.component';

describe('SupportFixComponent', () => {
  let component: SupportFixComponent;
  let fixture: ComponentFixture<SupportFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportFixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
