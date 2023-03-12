import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDialogModule } from '@infragistics/igniteui-angular';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [BrowserAnimationsModule, NoopAnimationsModule, IgxDialogModule]
    }).compileComponents();
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    component.Show = false;
    component.auditData=[
      {
          "data": [
              {
                  "key": "name",
                  "newValue": "Xavier son",
                  "oldValue": "Williams"
              },
              {
                  "key": "version",
                  "value": "1.00"
              }
          ],
          "updatedDate": "2/3/2023",
          "updatedTime": "2023-02-03T06:12:43.121Z",
          "updatedBy": "",
          "id": "Checklist ID 143 Updated"
      }
  ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClick of close icon should call hide function', () => {
    component.closeDialog.subscribe(() => {
      return;
    });
    component.hide();
    fixture.detectChanges();
  });
  it('testing show function', () => {
    component.openDialog.subscribe(() => {
      return;
    });
    fixture.detectChanges();
    component.show({});
  });
});
