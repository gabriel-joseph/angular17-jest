import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLibComponent } from './music-lib.component';

describe('MusicLibComponent', () => {
  let component: MusicLibComponent;
  let fixture: ComponentFixture<MusicLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
