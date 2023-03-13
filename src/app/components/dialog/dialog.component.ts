import { Component, Inject } from '@angular/core';
import {DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';



import { natSpaces } from '../../constants/app.constants';
import { TaskDetails } from '../../models/tasks.model';

import { TasksService } from '../../services/task.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public natSpaces = natSpaces;
  dialogTitle: string = this.data.task?.name ? 'Edit '+ this.data.task.name : 'Create Server';
  taskName: string = this.data.task.name ?? '';
  taskdescription: string = this.data.task.description ?? '';
  taskNatSpace: string = this.data.task.nat_space_id ?? '';
  taskIpAddress: string = this.data.task.server_ip ?? '';
  constructor(public dialogRef: DialogRef<DialogComponent>, @Inject(DIALOG_DATA) public data: any, private tasksService : TasksService) {}
  
  closeDialog() {
    this.dialogRef.close();
    console.log(this.data, this.taskName);

  }

  saveTask() {
    let task : TaskDetails =  { name : this.taskName, description : this.taskdescription, nat_space_id : this.taskNatSpace, server_ip : this.taskIpAddress};
    this.tasksService.editTask(task);
    this.dialogRef.close();
  }
}
