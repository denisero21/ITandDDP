import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangPasComponent } from './chang-pas.component';

describe('ChangPasComponent', () => {
  let component: ChangPasComponent;
  let fixture: ComponentFixture<ChangPasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangPasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
