import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeesType } from '../models/northwind1/employees-type';
import { Northwind1 } from '../static-data/northwind1';

@Injectable({
  providedIn: 'root'
})
export class Northwind1Service {
  public getEmployees(): Observable<EmployeesType[]> {
    return of(Northwind1['EmployeesType']);
  }
}
