import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GotService} from '../got.service';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  private id=this._route.snapshot.paramMap.get('id');
  public house;
  constructor(private _route:ActivatedRoute,private gotservice:GotService) { }
  private getHouseDetails=(id)=>{
    this.gotservice.getHouse(id).subscribe(
      response=>{
        this.house=response;
        console.log(this.house);
      }
    );
  }
  ngOnInit() {
    this.getHouseDetails(this.id);
  }

}
