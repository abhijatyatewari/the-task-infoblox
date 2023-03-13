import { Component, OnInit } from '@angular/core';
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
export class TaskListComponent {
  public taskList: Array<TaskDetails> | any;
  dialogTitle: string = 'Create Server';
  selectedTask: TaskDetails = {};
  isDialogOpen: boolean = false; 


  constructor(private tasksService: TasksService, public dialog: Dialog) {}


  ngOnInit() {
    this.tasksService.getTasksList();
    this.tasksService.taskList$.asObservable().subscribe((data: any) => {
      this.taskList = data;
    });
  }

  handleTaskSelection($event: any) {
    $event.stopPropagation();
  }

  selectTask(task: TaskDetails) {
    this.selectedTask = task;
  }

  editTask() {
    this.dialogTitle = 'Edit '+ this.selectedTask.name;
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
      data: {title: this.dialogTitle },
    });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed');
      this.dialogTitle = '';
    });
  }



}
