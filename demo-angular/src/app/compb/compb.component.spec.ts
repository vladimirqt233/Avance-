import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompbComponent } from './compb.component';

describe('CompbComponent', () => {
  let component: CompbComponent;
  let fixture: ComponentFixture<CompbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
