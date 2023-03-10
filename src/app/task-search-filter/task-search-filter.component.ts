import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';


import { TasksService } from '../../services/task.service';

@Component({
  selector: 'app-task-search-filter',
  templateUrl: './task-search-filter.component.html',
  styleUrls: ['./task-search-filter.component.scss'],
  providers: []
})
export class TaskSearchFilterComponent {
  taskSearchForm: UntypedFormGroup;
  public today = new Date();
  imagePath = ImgPath;

  constructor(
    private _fb: FormBuilder,
    private tasksService: TasksService,
    private datePipe: DatePipe,
    private titlecase: TitleCasePipe,
  ) {
    this.generateChecklistForm();
  }

  generateChecklistForm() {
      this.taskSearchForm = this._fb.group({
        givenName: ['', [Validators.pattern(name_regex)]],
      })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.taskSearchForm.controls;
  }
  closeSearchFilterPopup() {
    const id = this.tasksService.getOverlayid();
    this.overlayService.hide(id);
  }
  searchAndFilter(formData: any) {
    const reqBody = this.removeEmptyColumns(this.taskSearchForm.value);
    if (!this.taskSearchForm.valid) {
      return;
    }
    this.tasksService.setSearchParams(reqBody);
    const id = this.tasksService.getOverlayid();
    this.overlayService.hide(id);
  }

  resetForm() {
    this.taskSearchForm.reset();
  }

}
