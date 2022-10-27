import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component'
import { ApiService } from './services/api.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [ 
    AppComponent, 
    NavbarComponent, 
    RegisterComponent, WelcomeComponent, QuestionComponent 
  ],

  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule,
    RouterModule.forRoot([
      // {path: "register", component: RegisterComponent},
      // {path: "register", component: RegisterComponent},

    ])
  ],
  
  providers: [ApiService],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
