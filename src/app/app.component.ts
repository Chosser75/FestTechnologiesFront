import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ZipCodeDetails } from './Models/zipcode-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FestTechnologiesFront';

  constructor(private dataService: DataService) {
    this.zipcodeDetails = new ZipCodeDetails();
  }
  ngOnInit(): void {
    console.log('init');
    this.load();
  }
  
  zipcodeDetails: ZipCodeDetails;

  load() {
    this.dataService.getZipCodeDetails('95032').subscribe((data: ZipCodeDetails) => this.zipcodeDetails = data);
    console.log('download ' + this.zipcodeDetails);
  }
}