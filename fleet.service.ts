import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Vehicle } from './models/vehicle.model';

@Injectable()
export class FleetService {
	private _v: ReplaySubject<Vehicle[]>;
	private interval: number = 0;
	constructor(private http: HttpClient) {}

	updateVehicleData(): void {
		this.http.get<Vehicle[]>('http://localhost:3000/vehicles').toPromise().then(v => {
			this._v.next(v);
		}) 
	}

	getVehicles(): ReplaySubject<Vehicle[]> {
		if (this._v == null) {
			this._v = new ReplaySubject(1);
			this.updateVehicleData();
		}

		console.log(this._v);
		return this._v;
	}
}
