import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RDDataComponent } from './rd-data.component';

describe('RDDataComponent', () => {
  let component: RDDataComponent;
  let fixture: ComponentFixture<RDDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RDDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RDDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
