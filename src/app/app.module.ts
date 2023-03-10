import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatSelectModule} from '@angular/material/select';

import { Overlay } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskSearchFilterComponent } from './components/task-search-filter/task-search-filter.component';

import { TasksService } from './services/task.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskSearchFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
