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
  taskName: string = '';

  constructor(
    private _fb: FormBuilder,
    private tasksService: TasksService,
  ) {}


  searchAndFilter(formData: any) {

  }

  resetForm() {
    
  }

}
