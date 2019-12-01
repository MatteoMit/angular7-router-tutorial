import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { appRoutes } from './routerConfig';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, 
                  RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

