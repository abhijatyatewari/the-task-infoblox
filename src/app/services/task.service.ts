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
  taskList$: Subject<TaskDetails[]>;
  private url: string = ''
 
  constructor(private http: HttpClient) {
    this.taskList$ = new Subject();
  }


  public getTasksList(index?: number, perPage?: number, filterArgs?: any, sortingArgs?: any): any {
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
      .subscribe((data) => {
        this.taskList = data;
        this.taskList$.next(this.taskList)});
  }

  public getFilteredTasksList(filterArgs: string): any {
    let filteredTaskList: TaskDetails[] = this.taskList.filter(task => task.name?.toLowerCase().includes(filterArgs));
      this.taskList$.next(filteredTaskList);
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

  public editTask(updatedTask: TaskDetails) {
    let editTaskIndex = this.taskList.findIndex(task => task.nat_space_id === updatedTask.nat_space_id);
    this.taskList[editTaskIndex] =  { ...this.taskList[editTaskIndex], ...updatedTask};
    this.taskList$.next(this.taskList);

  }

  public deleteTask(taskDeletionList: TaskDetails[]) {
    let updatedList: TaskDetails[] = this.taskList.filter(task => !taskDeletionList.find((deletedTask => task.nat_space_id === deletedTask.nat_space_id)));
    this.taskList = updatedList;  
    this.taskList$.next(this.taskList);
  }
}