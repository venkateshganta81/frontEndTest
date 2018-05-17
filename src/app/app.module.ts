import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';




import { AppComponent } from './app.component';
import { AnalyticsComponent } from './analytics/analytics.component';



const appRoutes : Routes = [
  { path : '' , redirectTo: '/analytics' , pathMatch:'full' }
  { path : 'analytics' , component : AnalyticsComponent }
]; 


@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
