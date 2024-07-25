import { ReservationService } from './service/reservation.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule,CalendarModule, FormsModule, ReactiveFormsModule, ToastModule],
  providers: [MessageService],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})

export class ReservationsComponent {
  reservationForm:FormGroup;

  constructor(private reservationService: ReservationService, private messageService: MessageService){
    this.reservationForm = new FormGroup({
      firstName:new FormControl(""),
      lastName:new FormControl(""),
      treatment:new FormControl(""),
      design:new FormControl(""),
      dateTime:new FormControl(""),
      comment:new FormControl("")
  })
}

  onSubmit():void{
    this.reservationService.createNewReservation(this.reservationForm.value).subscribe((response) => {
      console.log(response);
      this.messageService.add({ severity: 'success', summary: 'Success!', detail: 'Your reservation has been sent.' });
    }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error!', detail: 'An error occurred, please try again later.' });    
    })
  }

}
