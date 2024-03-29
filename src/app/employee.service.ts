import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee }  from './employee';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  // The getEmployees() method will make a GET request to the Spring Boot backend to retrieve a list of employees.
  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employees/all`);
  }


  // The addEmployee() method will make a POST request to the Spring Boot backend to add an employee.
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employees/add`, employee);
  }

  // The updateEmployee() method will make a PUT request to the Spring Boot backend to update an employee.
  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employees/update`, employee);
  }

  // The deleteEmployee() method will make a DELETE request to the Spring Boot backend to delete an employee.
  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employees/delete/${employeeId}`);
  }

}
