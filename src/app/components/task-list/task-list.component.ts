import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';


import { TasksService } from '../../services/task.service';
import { TaskDetails } from '../../models/tasks.model';

import { TaskSearchFilterComponent } from '../task-search-filter/task-search-filter.component';

import { natSpaces } from '../../constants/app.constants';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: []
})
export class TaskListComponent {
  public taskList: Array<TaskDetails> | any;
  public natSpaces = natSpaces;

  constructor(private tasksService: TasksService) {}
  ngOnInit() {
    this.tasksService.getTasksList();
    this.tasksService.taskList$.asObservable().subscribe((data: any) => {
      this.taskList = data;
    });
  }

  selectTask(task: TaskDetails) {

  }

  editTask(task: TaskDetails) {

  }

  deleteTask(task: TaskDetails) {

  }

  createTask(task: TaskDetails) {
    this.showOverlay();
  }


  public showOverlay() {
    if (!this._overlayId) {
      if (!this._overlayId) {
        const positionSettings: PositionSettings = {
          horizontalDirection: HorizontalAlignment.Left,
          verticalDirection: VerticalAlignment.Bottom,
          horizontalStartPoint: HorizontalAlignment.Right,
          verticalStartPoint: VerticalAlignment.Bottom
        };
        const strategy = new ConnectedPositioningStrategy(positionSettings);
        const overlaySettings: OverlaySettings = {
          target: this.searchInput.nativeElement,
          positionStrategy: strategy,
          modal: false
        };

        this._overlayId = this.overlayService.attach(SearchFilterComponent, overlaySettings);
      }
    }
  }

  hideOverlay() {
    this.openSearchModal = false;
    this.overlayService.hide(this._overlayId);
  }  



}
