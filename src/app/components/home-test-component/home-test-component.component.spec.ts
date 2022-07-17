import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestComponentComponent } from './home-test-component.component';

describe('HomeTestComponentComponent', () => {
  let component: HomeTestComponentComponent;
  let fixture: ComponentFixture<HomeTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
