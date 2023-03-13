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
  selectedTasks: Array<TaskDetails> = [];
  isTaskSelected : boolean = false;
  isMultipleTaskSelected : boolean = false;
  isDialogOpen: boolean = false; 


  constructor(private tasksService: TasksService, public dialog: Dialog) {}


  ngOnInit() {
    this.tasksService.getTasksList();
    this.tasksService.taskList$.asObservable().subscribe((data: any) => {
      this.taskList = data;
    });
  }

  ngAfterViewInit() {
    // this.isSelected();
  }

  handleTaskSelection($event: any, task: TaskDetails) {
    $event.stopPropagation();
    if($event.target.checked === true) {
      this.selectTask(task);
      return;
    }

      this.deselectTask(task);

  }

  selectTask(task: TaskDetails) {
    this.selectedTasks.push(task);
    this.updateTaskSelectStatus();
  }

  deselectTask(deSelectedTask: TaskDetails) {
    let taskIndex = this.selectedTasks.findIndex((task : TaskDetails) => {
      task.name = deSelectedTask.name;
    });

    this.selectedTasks.splice(taskIndex, 1);
    this.updateTaskSelectStatus();
  }

  updateTaskSelectStatus() {
    this.isTaskSelected = this.selectedTasks.length > 0;
    this.isMultipleTaskSelected = this.selectedTasks.length > 1;
  }


  editTask() {
    this.dialogTitle = 'Edit '+ this.selectedTasks[0]?.name;
    this.openDialog();
  }

  deleteTasks() {
    this.tasksService.deleteTask(this.selectedTasks);
  }

  createTask() {
    this.openDialog();
  }


  closeDialog() {
    this.isDialogOpen = false;
  }  

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(DialogComponent, { 
      width: '250px',
      data: { task: this.selectedTasks[0] }
    });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed');
      this.dialogTitle = '';
    });
  }



}
