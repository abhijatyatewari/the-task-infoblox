import { Component, Inject } from '@angular/core';
import {DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';



import { natSpaces } from '../../constants/app.constants';
import { TaskDetails } from '../../models/tasks.model';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public natSpaces = natSpaces;
  taskName: string = this.data.name;
  taskdescription: string = this.data.description;
  taskNatSpace: string = this.data.nat_space_id;
  taskIpAddress: string = this.data.server_ip;
  constructor(public dialogRef: DialogRef<DialogComponent>, @Inject(DIALOG_DATA) public data: any) {}
  
  closeDialog() {
    this.dialogRef.close();
  }

  saveTask() {
    this.dialogRef.close();
  }
}
