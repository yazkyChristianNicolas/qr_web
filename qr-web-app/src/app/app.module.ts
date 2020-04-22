import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CodesComponent } from './codes/codes/codes.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { NewCodeComponent } from './codes/new-code/new-code.component';
import { CodeDetailComponent } from './codes/code-detail/code-detail.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CodeActionComponent } from './shared/code-action/code-action.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    CodesComponent,
    NotificationsComponent,
    SettingsComponent,
    NewCodeComponent,
    CodeDetailComponent,
    CodeActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatStepperModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule
    ],
  providers: [  
      MatDatepickerModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
