import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputZoneComponent } from './text-input-zone.component';

describe('TextInputZoneComponent', () => {
  let component: TextInputZoneComponent;
  let fixture: ComponentFixture<TextInputZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInputZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
