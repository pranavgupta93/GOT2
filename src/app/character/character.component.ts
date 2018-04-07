import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GotService } from '../got.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers:[Location]
})
export class CharacterComponent implements OnInit {
  private id;
  public character;
  public goback() {
    this.location.back();
  }
  constructor(private _route:ActivatedRoute,private gotservice:GotService,private location:Location) { }
  private getCharacterDetails=(id)=>{
    this.gotservice.getCharacter(id).subscribe(
      response=>{
        //console.log(response);
        this.character=response;
        console.log(this.character);
      },
      error=>{
        console.log("some error occurred");
      }
      
    );
  }
  ngOnInit() {
    this._route.params.subscribe(params=>{
      this.id=params.id;
      this.getCharacterDetails(this.id);
    });
    //this.getCharacterDetails(this.id);
  }

}
