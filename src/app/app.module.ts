import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UserFormComponent } from './component/user-form/user-form.component';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material'
import {MatProgressBarModule} from '@angular/material/progress-bar';;
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material'
import {MatRadioModule} from '@angular/material/radio';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailsComponent,
    UserFormComponent,
    DeletePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  entryComponents: [UserFormComponent,DeletePopupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
