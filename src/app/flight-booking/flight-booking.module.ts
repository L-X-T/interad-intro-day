import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightStatusToggleComponent } from './flight-status-toggle/flight-status-toggle.component';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(FLIGHT_BOOKING_ROUTES), SharedModule],
  declarations: [FlightSearchComponent, FlightCardComponent, FlightStatusToggleComponent],
  providers: [],
  exports: [FlightSearchComponent]
})
export class FlightBookingModule {}
