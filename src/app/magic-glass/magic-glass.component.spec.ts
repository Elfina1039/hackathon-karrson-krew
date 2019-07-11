import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicGlassComponent } from './magic-glass.component';

describe('MagicGlassComponent', () => {
  let component: MagicGlassComponent;
  let fixture: ComponentFixture<MagicGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
