import { Component, Inject } from '@angular/core';
import {DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';



import { natSpaces } from '../../constants/app.constants';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public natSpaces = natSpaces;
  taskName: string = '';
  taskdescription: string = '';
  taskNatSpace: string = '';
  taskIpAddress: string = '';
  constructor(public dialogRef: DialogRef<string>, @Inject(DIALOG_DATA) public data: any) {}
  
}
