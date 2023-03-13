import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';


import { TasksService } from '../../services/task.service';
import { TaskDetails } from '../../models/tasks.model';

import { TaskSearchFilterComponent } from '../task-search-filter/task-search-filter.component';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: []
})
export class TaskListComponent implements OnInit, AfterViewInit {
  public taskList: Array<TaskDetails> | any;
  dialogTitle: string = 'Create Server';
  selectedTask: TaskDetails | null = {};
  isDialogOpen: boolean = false; 


  constructor(private tasksService: TasksService, public dialog: Dialog) {}


  ngOnInit() {
    this.tasksService.getTasksList();
    this.tasksService.taskList$.asObservable().subscribe((data: any) => {
      this.taskList = data;
    });

    this.isSelected();
  }

  ngAfterViewInit() {
    this.isSelected();
  }

  handleTaskSelection($event: any, task: TaskDetails) {
    $event.stopPropagation();
    if($event.target.checked === true) 
    this.selectTask(task);
    else
    this.selectedTask = null;

  }

  selectTask(task: TaskDetails) {
    this.selectedTask = task;
  }

  isSelected() : boolean {
    return this.selectedTask === null ? true : false;
  }

  editTask() {
    this.dialogTitle = 'Edit '+ this.selectedTask?.name;
    this.openDialog();
  }

  deleteTask() {
    let taskIndex = this.taskList.findIndex((task : TaskDetails) => {
      task.name = this.selectTask.name;
    });

    this.taskList.splice(taskIndex, 1);
  }

  createTask() {
    console.log('create Task');
    this.openDialog();
  }


  closeDialog() {
    this.isDialogOpen = false;
  }  

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(DialogComponent, { 
      width: '250px',
      data: { title: this.dialogTitle , selectedTask: this.selectedTask }
    });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed');
      this.dialogTitle = '';
    });
  }



}
