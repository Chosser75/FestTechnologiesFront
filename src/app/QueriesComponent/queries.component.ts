import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ZipCodeQuery } from '../Models/zipcode-qiery';

@Component({
  selector: 'queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadRequests(1, 100);
  }

  zipCodeQuery: ZipCodeQuery[] | undefined;


  loadRequests(page: number, rowsPerPage: number) {
    this.dataService.getCityTemperatureQueries(page, rowsPerPage).subscribe((data: ZipCodeQuery[]) => this.zipCodeQuery = data);
  }
}
