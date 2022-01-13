import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoachListComponent } from './views/coach-list/coach-list.component';
import { TopBarComponent } from './views/top-bar/top-bar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoacheeDetailsComponent } from './views/coachee-details/coachee-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './views/create-account/create-account.component'
import { httpInterceptorProviders } from './interceptor/index';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { MatSortModule } from '@angular/material/sort';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CoachListComponent,
    TopBarComponent,
    CoacheeDetailsComponent,
    LoginComponent,
    CreateAccountComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    HttpClientModule,
    MatSortModule
  ],
  exports:[
    MatGridListModule,
    MatTableModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
