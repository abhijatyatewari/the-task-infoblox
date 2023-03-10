import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TaskDetails } from '../models/tasks.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable()
export class TasksService {
  public data: any;
  public taskList: Array<TaskDetails> = [];
  public searchFields: any;
  private subject = new Subject<any>();
  taskList$: BehaviorSubject<never[]>;
  private url: string = ''
 
  constructor(private http: HttpClient) {
    this.taskList$ = new BehaviorSubject([]);
  }


  public getTasksList(index?: number, perPage?: number, sortingArgs?: any, filterArgs?: any): any {
    let qS = `./assets/mock-data/preconfigured-servers.json`;
    const params = encodeURI('paginate={"offset":' + index + ',"limit":' + perPage + ',"count": true}');
    if (filterArgs) {
      qS += this.buildFilterExpression(filterArgs) + '&';
    }
    if (perPage) {
      qS = qS + params;
    }
    this.http
      .get<TaskDetails[]>(`${this.url + qS}`)
      .pipe(map((data: any) => data))
      .subscribe((data) => this.taskList$.next(data));
  }

  public buildFilterExpression(filterValue: any): string {

    if (filterValue.status === 'all') {
      delete filterValue.status;
    }
    if (filterValue.role_name === 'all') {
      delete filterValue.role_name;
    }
    const query = 'filters=' + encodeURI(JSON.stringify(filterValue));
    return query;
  }

  public editTask(taskId: string): string {
    let editStatus = '';
    return editStatus;
  }

  public deleteTask(taskId: string): string {
    let deleteStatus = '0';
    return deleteStatus;
  }
}