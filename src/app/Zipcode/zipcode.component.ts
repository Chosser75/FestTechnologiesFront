import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ZipCodeDetails } from '../Models/zipcode-details';

@Component({
  selector: 'zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {
  
  ngOnInit(): void {
  }

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
    else{
      this.zipcodeDetails = new ZipCodeDetails();
      this.zipcodeDetails.errorMessage = "Field is empty";
      this.zipcodeDetails.statusCode = 0;
    }
  }

  async loadDetails(zip: string) {
    this.zipcodeDetails = undefined;
    this.dataService.getZipCodeDetails(zip).subscribe((data: ZipCodeDetails) => this.zipcodeDetails = data);
  }

}
