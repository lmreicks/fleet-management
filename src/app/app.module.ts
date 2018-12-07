import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
	declarations: [
		AppComponent,
		MapComponent
	],
	imports: [
		BrowserModule,
		AgmCoreModule.forRoot({ apiKey: 'AIzaSyA5g0FbkgLm8SNwBSEm95Pyw_vOo7UcqDA'
		}),
		FormsModule,
		NgbModule.forRoot()
	],
	providers: [
		GoogleMapsAPIWrapper
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
