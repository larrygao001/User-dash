import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RDListComponent } from './rd-list.component';

describe('RDListComponent', () => {
  let component: RDListComponent;
  let fixture: ComponentFixture<RDListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RDListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
