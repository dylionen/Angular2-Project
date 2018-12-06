import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscommentformComponent } from './newscommentform.component';

describe('NewscommentformComponent', () => {
  let component: NewscommentformComponent;
  let fixture: ComponentFixture<NewscommentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewscommentformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscommentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
