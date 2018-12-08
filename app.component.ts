import { Component } from '@angular/core';
import { Vehicle } from './models/vehicle.model';
import { FleetService } from './fleet.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	SelectedVehicle: Vehicle;

	public vehicles: Vehicle[];

	constructor(private fleetService: FleetService) {
		this.fleetService.getVehicles().subscribe(v => {
            this.vehicles = v;
            if(this.SelectedVehicle == null){
                this.SelectedVehicle = v[0];
            }
            this.SelectedVehicle = v.filter(x => x.id == this.SelectedVehicle.id)[0];
		});
		setInterval(() => {
			this.fleetService.updateVehicleData();
		}, 5000);
	}
}
