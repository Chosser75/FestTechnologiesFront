import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    private url = "https://localhost:44369/api/v1/Weather";

    constructor(private http: HttpClient) {
    }

    getZipCodeDetails(zipCode: string) {
        return this.http.get(this.url + '/GetZipCodeDetails/' + zipCode);
    }

    getCityTemperatureQueries(page: number, rowsPerPage: number) {
        return this.http.get(this.url + '/GetCityTemperatureQueries/' + page + '/' + rowsPerPage);
    }

    
}