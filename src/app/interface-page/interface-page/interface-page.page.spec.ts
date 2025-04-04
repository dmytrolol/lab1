import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfacePagePage } from './interface-page.page';

describe('InterfacePagePage', () => {
  let component: InterfacePagePage;
  let fixture: ComponentFixture<InterfacePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
