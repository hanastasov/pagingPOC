import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { ApiV2TablesMdfjtb5ogn0piqmRecordsType } from '../models/chill-gaming/api-v2-tables-mdfjtb5ogn0piqm-records-type';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { EmployeesType } from '../models/northwind1/employees-type';
import { FinancialService } from '../services/financial.service';
import { Northwind1Service } from '../services/northwind1.service';
import { ChillGamingService } from '../services/chill-gaming.service';

@Component({
  selector: 'app-child-view',
  imports: [IGX_CARD_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public chillGaming?: ApiV2TablesMdfjtb5ogn0piqmRecordsType;
  public date: Date = new Date('2024-12-10T00:00');
  public northwind1Employees: EmployeesType[] = [];
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  constructor(private chillGamingService: ChillGamingService, private northwind1Service: Northwind1Service, private financialService: FinancialService) { }

  ngOnInit() {
    this.chillGamingService.getApiV2TablesMdfjtb5ogn0piqmRecords('', '', '', '', NaN, NaN, NaN).pipe(takeUntil(this.destroy$)).subscribe(data => this.chillGaming = data);
    this.northwind1Service.getEmployees().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwind1Employees = data,
      error: (_err: any) => this.northwind1Employees = []
    });
    this.financialService.getBoxOfficeRevenue().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.financialBoxOfficeRevenue = data,
      error: (_err: any) => this.financialBoxOfficeRevenue = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
