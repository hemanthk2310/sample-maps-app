import { Component, OnInit } from '@angular/core';
import { MarkerDetails } from './model/marker-details';
import { MarkerDetailService } from './service/marker-detail.service';
import { LatitudeLongitude } from './model/latitude-longitude';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  initialLat: number;
  initialLon: number;
  markerDetails: MarkerDetails[];
  latLonDetails: LatitudeLongitude[];
  unalteredMarkerDetails: MarkerDetails[];

  constructor(private markerDetailSvc: MarkerDetailService) {
    this.latLonDetails = [];
  }

  ngOnInit(): void {

    this.getMarkerDetailsFromService();
  }

  getMarkerDetailsFromService() {
    this.markerDetailSvc.getMarkerDetails().subscribe((response: MarkerDetails[]) => {
      if (response.length > 0) {
        this.markerDetails = response;
        this.initialLat = response[0].lat;
        this.initialLon = response[0].lon;

        this.markerDetails.forEach(element => {
          element.isOn = false;
          this.latLonDetails.push({
            id: element.id,
            lat: element.lat,
            lon: element.lon,
            isClicked: false
          });
        });

        this.unalteredMarkerDetails = this.markerDetails;

      }

    }, (error) => {
      console.log("TCL: AppComponent -> getMarkerDetailsFromService -> error", error);
    });
  }

  onMapClicked(event) {
    console.log("TCL: AppComponent -> onMapClick -> event", event)
  }

  onMarkerClicked(marker: LatitudeLongitude, index: number) {
    console.log("TCL: AppComponent -> onMarkerClicked -> marker", marker)
    const selectedMarker: MarkerDetails[] = this.unalteredMarkerDetails.filter(x => x.id === marker.id);
    const unselectedMarkers: MarkerDetails[] = this.unalteredMarkerDetails.filter(x => x.id !== marker.id);
    
     this.latLonDetails.forEach(element => {
        element.isClicked = false;
      })

    unselectedMarkers.forEach(element => {
      element.isOn = false;
    })

    this.markerDetails = [];
    selectedMarker[0].isOn = !selectedMarker[0].isOn;

    if (selectedMarker[0].isOn) {
      this.markerDetails = selectedMarker;
      this.latLonDetails.filter(x => x.id === selectedMarker[0].id)[0].isClicked = true;
    } else {
      this.markerDetails = this.unalteredMarkerDetails;
      // const markers = this.latLonDetails.filter(x => x.id !== selectedMarker[0].id);
      // markers.forEach(element => {
      //   element.isClicked = false;
      // })
    }
  }
}
