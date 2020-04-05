import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { UserComponent } from './user/user.component';
import { Routes,RouterModule } from '@angular/router';

const appRoutes: Routes =[
  { path: '',component: LogComponent },
  { path: 'user', component:UserComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) ,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
