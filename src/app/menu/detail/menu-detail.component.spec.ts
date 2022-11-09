import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetailComponent } from './menu-detail.component';

describe('MenuComponent', () => {
  let component: MenuDetailComponent;
  let fixture: ComponentFixture<MenuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
