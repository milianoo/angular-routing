import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenRoutesMenuComponent } from './children-routes-menu.component';

describe('ChildrenRoutesMenuComponent', () => {
  let component: ChildrenRoutesMenuComponent;
  let fixture: ComponentFixture<ChildrenRoutesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenRoutesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenRoutesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
