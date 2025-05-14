import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountToogleComponent } from './account-toogle.component';

describe('AccountToogleComponent', () => {
  let component: AccountToogleComponent;
  let fixture: ComponentFixture<AccountToogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountToogleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
