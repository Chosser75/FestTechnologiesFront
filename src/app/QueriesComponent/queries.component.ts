import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ZipCodeQuery } from '../Models/zipcode-qiery';
import { AppConfigService } from '../services/app-config.service';

@Component({
  selector: 'queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

  constructor(private dataService: DataService, private appConfigService: AppConfigService) {
    this.rowsPerPage = this.appConfigService.rowsPerPage;
    this.currentPage = 1;      
  }

  zipCodeQuery: ZipCodeQuery[] | undefined;
  totalPages: number | undefined;
  rowsPerPage: number;
  currentPage: number;
  range: number[] | undefined;

  ngOnInit(): void {
    this.loadRequests(this.currentPage, this.rowsPerPage);  
    
     
  }

  changePage(newPage: number){
    this.currentPage = newPage;
    this.loadRequests(this.currentPage, this.rowsPerPage);
  }
  
  async loadRequests(page: number, rowsPerPage: number) {
    this.dataService.getCityTemperatureQueries(page, rowsPerPage).subscribe((data: ZipCodeQuery[]) => this.zipCodeQuery = data);
    this.totalPages = await this.dataService.getQueriesTotalPages(rowsPerPage);   
    this.range = [];
    for (var i=1; i<=this.totalPages; i++) {
      this.range.push(i);
    }  
  }
}
