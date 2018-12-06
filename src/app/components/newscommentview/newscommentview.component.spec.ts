import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscommentviewComponent } from './newscommentview.component';

describe('NewscommentviewComponent', () => {
  let component: NewscommentviewComponent;
  let fixture: ComponentFixture<NewscommentviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewscommentviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscommentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
