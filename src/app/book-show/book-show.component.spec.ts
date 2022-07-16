import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { Ticket } from '../models/titcket';

import { BookShowComponent } from './book-show.component';

describe('BookShowComponent', () => {
  let component: BookShowComponent;
  let fixture: ComponentFixture<BookShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookShowComponent, BreadcrumbComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe("boundary", () => {

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  // describe("exception", () => {

  //   it('should not book ticket without email', () => {
  //     let ticket: Ticket = new Ticket(0, "", "9898989878", 2, 1, 300);

  //     component.bookingForm.addControl("email",new FormControl(""));
  //     component.bookingForm.addControl("mobile",new FormControl("9879879879"));
  //     component.bookingForm.addControl("seats",new FormControl("1"));

  //     component.bookTicket();
  //     fixture.detectChanges();

  //     let element = fixture.nativeElement;
  //     // expect(element.querySelector(".message")).toContain("Your ticket is not booked")
  //   });
  // });

});
