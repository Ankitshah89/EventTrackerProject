import { CovidService } from './services/covid.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidListComponent } from './components/covid-list/covid-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


// import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    CovidListComponent,
    HomeComponent,
    NotFoundComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,



    // ChartsModule
  ],
  providers: [
    CovidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
