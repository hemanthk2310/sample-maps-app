import { Component, OnInit, Input } from '@angular/core';
import { MarkerDetails } from '../model/marker-details';

@Component({
  selector: 'app-marker-details',
  templateUrl: './marker-details.component.html',
  styleUrls: ['./marker-details.component.css']
})
export class MarkerDetailsComponent implements OnInit {

  @Input() markerDetail: MarkerDetails;
  
  constructor() { }

  ngOnInit() {
  }

}
