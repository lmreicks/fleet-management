import { Component } from '@angular/core';
import { Vehicle } from './models/vehicle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  SelectedVehicle: Vehicle;

  public vehicles: Vehicle[];

  constructor() {
	let locations = [
		[-33.890542, 151.274856],
		[-33.923036, 151.259052],
		[-34.028249, 151.157507],
		[-33.80010128657071, 151.28747820854187],
		[-33.950198, 151.259302]
	];
	  this.vehicles = [];

	  for (let i = 0; i < 5; i++) {
		  this.vehicles.push({
			id: i,
			lat: locations[i][0],
			lng: locations[i][1]
		  });
	  }

	  this.SelectedVehicle = this.vehicles[0];
  }
}
