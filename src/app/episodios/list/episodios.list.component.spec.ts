import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiosListComponent } from './episodios.list.component';

describe('EpisodiosListComponent', () => {
  let component: EpisodiosListComponent;
  let fixture: ComponentFixture<EpisodiosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodiosListComponent]
    });
    fixture = TestBed.createComponent(EpisodiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
