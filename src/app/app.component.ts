import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ZipCodeDetails } from './Models/zipcode-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FestTechnologiesFront';

  @Input() zipCode: string = "";

  constructor(private dataService: DataService) {}
  
  zipcodeDetails: ZipCodeDetails | undefined;

  async getDetails(){
    if(this.zipCode != ""){
      try{
        await this.loadDetails(this.zipCode);
      }catch(e){
        this.zipcodeDetails = new ZipCodeDetails();
        this.zipcodeDetails.errorMessage = e.message;
        this.zipcodeDetails.statusCode = e.status;
      }
    }
  }

  async loadDetails(zip: string) {
    this.zipcodeDetails = undefined;
    this.dataService.getZipCodeDetails(zip).subscribe((data: ZipCodeDetails) => this.zipcodeDetails = data);
  }
}