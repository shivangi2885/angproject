import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsecComponent } from './listsec.component';

describe('ListsecComponent', () => {
  let component: ListsecComponent;
  let fixture: ComponentFixture<ListsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
