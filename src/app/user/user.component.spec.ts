import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("testing title", () => {
    expect(component.componentName).toBe("user")
  })

  it("testing sum()", () => {
    expect(component.sum(40, 60)).toBe(100)
  })

  it("testing html element", () => {
    const data = fixture.nativeElement;
    expect(data.querySelector(".header").textContent).toContain("User");
  })
});
