import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ApiV2TablesMdfjtb5ogn0piqmRecordsType } from '../models/chill-gaming/api-v2-tables-mdfjtb5ogn0piqm-records-type';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://app.nocodb.com';

@Injectable({
  providedIn: 'root'
})
export class ChillGamingService {
  constructor(
    private http: HttpClient
  ) { }

  public getApiV2TablesMdfjtb5ogn0piqmRecords(viewId: string, fields: string, sort: string, where: string, limit: number, shuffle: number, offset: number): Observable<ApiV2TablesMdfjtb5ogn0piqmRecordsType | undefined> {
    const params = new HttpParams()
      .append('viewId', viewId)
      .append('fields', fields)
      .append('sort', sort)
      .append('where', where)
      .append('limit', limit)
      .append('shuffle', shuffle)
      .append('offset', offset);
    const options = {
      params,
    };
    return this.http.get<ApiV2TablesMdfjtb5ogn0piqmRecordsType | undefined>(`${API_ENDPOINT}/api/v2/tables/mdfjtb5ogn0piqm/records`, options)
      .pipe(catchError(ErrorHandlerService.handleError<ApiV2TablesMdfjtb5ogn0piqmRecordsType | undefined>('getApiV2TablesMdfjtb5ogn0piqmRecords', undefined)));
  }
}
