import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GotService} from '../got.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
  providers:[Location]
})
export class HouseComponent implements OnInit {
  private id;
  public house;
  constructor(private _route:ActivatedRoute,private gotservice:GotService,private location:Location) { }
  private getHouseDetails=(id)=>{
    this.gotservice.getHouse(id).subscribe(
      response=>{
        this.house=response;
        console.log(this.house);
      },
      error=>{
        console.log("some error occurred");
      }
    );
  }
  /**
   * goback
   */
  public goback() {
    this.location.back();
  }
  ngOnInit() {
    this._route.params.subscribe(params=>{
      this.id=params['id'];
      this.getHouseDetails(this.id);
    });
    //this.getHouseDetails(this.id);
  }

}
