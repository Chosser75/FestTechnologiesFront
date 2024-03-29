import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ZipCodeDetails } from '../Models/zipcode-details';
import { ZipCodeQuery } from '../Models/zipcode-qiery';
import { Observable, throwError } from 'rxjs';
import { AppConfigService } from './app-config.service';

@Injectable()
export class DataService {

    private url: string;

    constructor(private http: HttpClient, private appConfigService: AppConfigService) {
        this.url = this.appConfigService.apiBaseUrl;
    }

    getZipCodeDetails(zipCode: string): Observable<ZipCodeDetails> {
        return this.http.get<ZipCodeDetails>(this.url + '/GetZipCodeDetails/' + zipCode).pipe(
            catchError(error => {
                let errorMsg: string = "";
                if (error.error instanceof ErrorEvent) {
                    errorMsg = error.error.message;                    
                } else {
                    errorMsg = this.getServerErrorMessage(error);
                }
                
                return throwError(errorMsg);
            })
        );
    }

    getCityTemperatureQueries(page: number, rowsPerPage: number): Observable<ZipCodeQuery[]> {
        return this.http.get<ZipCodeQuery[]>(this.url + '/GetCityTemperatureQueries/' + page + '/' + rowsPerPage).pipe(
            catchError(error => {
                let errorMsg: string = "";
                if (error.error instanceof ErrorEvent) {
                    errorMsg = error.error.message;                    
                } else {
                    errorMsg = this.getServerErrorMessage(error);
                }
                
                return throwError(errorMsg);
            })
        );
    }

    async getQueriesTotalPages(rowsPerPage: number): Promise<number> {
        return await this.http.get<number>(this.url + '/GetQueriesTotalPages/' + rowsPerPage).toPromise();
    }

    private getServerErrorMessage(error: HttpErrorResponse): string {
        switch (error.status) {            
            case 403: {
                return `Access Denied: ${error.message}`;
            }
            case 500: {
                return `Internal Server Error: ${error.message}`;
            }
            default: {
                return `Unknown Server Error: ${error.message}`;
            }

        }
    }
}