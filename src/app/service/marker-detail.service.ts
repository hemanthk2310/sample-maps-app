import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarkerDetailService {

  constructor(private http: HttpClient) { }

  getMarkerDetails() {
    // return this.http.get('http://team-scale.com/TestData/ng_text_v15/api');
    return this.http.get('../../assets/json/sample-data.json');
  }
}
