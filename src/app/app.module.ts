import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FleetService } from './fleet.service';

@NgModule({
	declarations: [
		AppComponent,
		MapComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AgmCoreModule.forRoot({ apiKey: 'AIzaSyA5g0FbkgLm8SNwBSEm95Pyw_vOo7UcqDA'
		}),
		FormsModule,
		NgbModule.forRoot()
	],
	providers: [
		GoogleMapsAPIWrapper,
		FleetService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
