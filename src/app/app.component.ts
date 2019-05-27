import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {


//1.) to use or display google map you have to first install @agm/core package

//2.) import thet @agm/core package in app.module.ts file

// 3.) write this in import AgmCoreModule.forRoot({
//                       apiKey:              'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw',
//                       libraries: ['places', 'drawing', 'geometry'],

//     }) 
// 4.) then write this in HTML  <agm-map [latitude]="lat" [longitude]="lng"
//           [fullscreenControl]='true' [mapTypeControl]='true' [fitBounds]="true">
//               <agm-marker *ngFor="let coordinate of start_end_mark; let i=index"
//               [latitude]="coordinate[0]"
//               [longitude]="coordinate[1]" [agmFitBounds]="true"></agm-marker>
//               <agm-polyline [visible]="true" [strokeWeight]="3" [strokeColor]="'#07b57a'">
//                     <agm-polyline-point
//                     *ngFor="let coordinate of latlng; let i=index"
//                     [latitude]="coordinate[0]"
//                     [longitude]="coordinate[1]">

// </agm-polyline-point>
// </agm-polyline>
//             </agm-map>

// here arg-map is for showing map, [fitBounds] is for focuse on marker, agm-marker is use for displaying the markes on map, agm-polyline is use for drowing a connected line on the lat-log

  start_end_mark = [];

  latlng = [
    [
      23.0285312,
      72.5262336
    ],
    [
      19.0760,
      72.8777
    ],
    [
      25.2048,
      55.2708
    ]
  ];
  
  constructor() {
    // this i write because to display a marks on first place and last place
    this.start_end_mark.push(this.latlng[0]);
    this.start_end_mark.push(this.latlng[this.latlng.length - 1]);
   }

  ngOnInit() {}
}
