import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensShowComponent } from './personagens.show.component';

describe('PersonagensShowComponent', () => {
  let component: PersonagensShowComponent;
  let fixture: ComponentFixture<PersonagensShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonagensShowComponent]
    });
    fixture = TestBed.createComponent(PersonagensShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
