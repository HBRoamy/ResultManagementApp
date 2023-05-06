import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherUiComponent } from './teacher-ui.component';

describe('TeacherUiComponent', () => {
  let component: TeacherUiComponent;
  let fixture: ComponentFixture<TeacherUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
