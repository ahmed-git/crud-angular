import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create-user/create.component';
import { UpdateComponent } from './update-user/update.component';
import { ListComponent } from './list-users/list.component';
import { DashboardComponent } from './dash/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterListPipe } from './list-users/filter-list.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    DashboardComponent,
    FilterListPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
