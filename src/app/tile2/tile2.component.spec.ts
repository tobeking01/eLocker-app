import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tile2Component } from './tile2.component';

describe('Tile2Component', () => {
  let component: Tile2Component;
  let fixture: ComponentFixture<Tile2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tile2Component]
    });
    fixture = TestBed.createComponent(Tile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
