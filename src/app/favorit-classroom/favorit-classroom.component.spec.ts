import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritClassroomComponent } from './favorit-classroom.component';

describe('FavoritClassroomComponent', () => {
  let component: FavoritClassroomComponent;
  let fixture: ComponentFixture<FavoritClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
