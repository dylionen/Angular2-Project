import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortnewsComponent } from './sortnews.component';

describe('SortnewsComponent', () => {
  let component: SortnewsComponent;
  let fixture: ComponentFixture<SortnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
