import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensListComponent } from './personagens.listcomponent';

describe('PersonagensComponent', () => {
  let component: PersonagensListComponent;
  let fixture: ComponentFixture<PersonagensListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonagensListComponent]
    });
    fixture = TestBed.createComponent(PersonagensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
