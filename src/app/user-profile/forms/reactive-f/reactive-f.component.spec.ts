import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFComponent } from './reactive-f.component';

describe('ReactiveFComponent', () => {
  let component: ReactiveFComponent;
  let fixture: ComponentFixture<ReactiveFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
