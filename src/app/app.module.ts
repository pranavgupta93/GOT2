import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { GotService } from './got.service';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { HouseComponent } from './house/house.component';
import { CharacterComponent } from './character/character.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    HouseComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    RouterModule.forRoot([{
      path:'home',component:HomeComponent
    },
    {
      path:'',redirectTo:'home',pathMatch:'full'
    },
    {
      path:'book/:id',component:BookComponent
    },
    {
      path:'house/:id', component:HouseComponent
    },
    {
      path:'character/:id',component:CharacterComponent
    }
  ])
  ],
  providers: [GotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
