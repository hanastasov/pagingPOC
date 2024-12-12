import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RowLayoutComponent } from './row-layout.component';

describe('RowLayoutComponent', () => {
  let component: RowLayoutComponent;
  let fixture: ComponentFixture<RowLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RowLayoutComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
