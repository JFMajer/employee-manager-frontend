import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees: Employee[] = [];
  title = 'employeemanagerfe';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().pipe(
      tap((response: Employee[]) => {
        this.employees = response;
      }),
      catchError((error: any) => {
        console.log(error);
        return of(null); // You can return a default value or handle the error accordingly
      })
    ).subscribe();
  }
  
}
