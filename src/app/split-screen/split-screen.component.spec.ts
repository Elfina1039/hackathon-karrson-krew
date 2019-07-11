import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitScreenComponent } from './split-screen.component';

describe('SplitScreenComponent', () => {
  let component: SplitScreenComponent;
  let fixture: ComponentFixture<SplitScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
