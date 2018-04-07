import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allData=[];
  public loadChardata=()=>{
    this.gotservice.getCharacterData().subscribe(
      response=>{
        //console.log(response);
        this.allData=this.allData.concat(response);
      }
    );
    
    
  }
  public loadBookdata=()=>{
    this.gotservice.getBookData().subscribe(
      response=>{
        this.gotservice.getBookData().subscribe(
          response=>{
            //console.log(response);
            this.allData=this.allData.concat(response);
          }
        );
        
        console.log(this.allData);
      }
    );
  }
  public loadHousedata=()=>{
    this.gotservice.getHouseData().subscribe(
      response=>{
        this.gotservice.getHouseData().subscribe(
          response=>{
            //console.log(response);
            this.allData=this.allData.concat(response);
          }
        );
        
      }
    );
  }
  constructor(private gotservice:GotService) { }

  ngOnInit() {
    this.loadChardata();
    this.loadHousedata();
    this.loadBookdata();
    setTimeout(() => {
      console.log(this.allData);
    }, 10000);
  }

}
