import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {// al final de todad las rutas 
    path: '**',
    component: PageNoFoundComponent 
  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNoFoundComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
  [RouterModule.forRoot(routes)]
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
