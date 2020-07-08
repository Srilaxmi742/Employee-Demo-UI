import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatCardModule, MatInputModule, MatTableModule} from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {AuthService} from "./session/auth.service";
import {AuthGuard} from "./session/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    EmployeeDataComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forRoot([]),
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    AuthService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
