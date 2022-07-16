import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';
import { Ticket } from '../models/titcket';
import { TicketService } from '../_services';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  bookingForm:FormGroup;
  selectedMovie:Movie;
  totalPrice:number = 0;
  message:string = "";

  constructor(private ticketService:TicketService, private router:Router) { 
    this.bookingForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      mobile: new FormControl("", [Validators.required]),
      seats: new FormControl("1", [Validators.required])
    })
  }

  ngOnInit() {
    this.selectedMovie = JSON.parse(localStorage.getItem("selectedMovie")||null);
    this.updateTotalPrice();
  }

  updateTotalPrice(){
    this.totalPrice = this.selectedMovie.price * this.bookingForm.value.seats;
  }

  bookTicket(){
    let ticket = {...this.bookingForm.value, movieId: this.selectedMovie.id, paid: this.totalPrice};
    this.ticketService.bookTicket(ticket).subscribe((res:Ticket)=>{
      console.log(res);
      alert("Your booking is confirmed, Please be on time");
      this.router.navigate(["landing-page"]);
      this.message = "Your booking is confirmed";
    }, (e)=>{
      console.log(e);
      this.message = "Your ticket is not booked.";
    })
  }
}
