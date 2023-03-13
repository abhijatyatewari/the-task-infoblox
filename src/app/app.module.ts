import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import { Overlay } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TaskSearchFilterComponent } from './components/task-search-filter/task-search-filter.component';

import { TasksService } from './services/task.service';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TaskListComponent,
    TaskSearchFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
