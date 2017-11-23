import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) { }

    loadData() {
        return this.httpClient.get('../assets/json/thirukural.json');

    }
}
